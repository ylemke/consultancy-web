from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import asyncio
from concurrent.futures import ThreadPoolExecutor

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email configuration (set these as environment variables in your hosting dashboard)
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.serviciodecorreo.es')
SMTP_PORT = int(os.environ.get('SMTP_PORT', '465'))
SMTP_USER = os.environ.get('SMTP_USER', 'info@yasminlemke.com')
SMTP_PASS = os.environ.get('SMTP_PASS', '')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', 'info@yasminlemke.com')

# Thread pool for sync email sending
email_executor = ThreadPoolExecutor(max_workers=2)


def send_email_sync(name: str, company: str, email: str, message: str, interest: str) -> bool:
    """Send notification email to info@yasminlemke.com (runs in thread pool)"""
    if not SMTP_PASS:
        logger.warning("SMTP_PASS not set — email notification skipped")
        return False
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'[yasminlemke.com] {interest} — {name}'
        msg['From'] = SMTP_USER
        msg['To'] = NOTIFY_EMAIL
        msg['Reply-To'] = email

        company_line = f"Company: {company}" if company else ""

        body_text = f"""New contact form submission from yasminlemke.com

Name: {name}
{company_line}
Email: {email}
Interest: {interest}

Message:
{message}

---
Reply directly to this email to respond to {name}.
"""

        body_html = f"""<html>
<body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
  <h2 style="border-bottom: 2px solid #000; padding-bottom: 8px;">New Contact from yasminlemke.com</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr><td style="padding: 10px; font-weight: bold; background: #f5f5f5; width: 120px;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee;">{name}</td></tr>
    {"<tr><td style='padding: 10px; font-weight: bold; background: #f5f5f5;'>Company</td><td style='padding: 10px; border-bottom: 1px solid #eee;'>" + company + "</td></tr>" if company else ""}
    <tr><td style="padding: 10px; font-weight: bold; background: #f5f5f5;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:{email}" style="color: #000;">{email}</a></td></tr>
    <tr><td style="padding: 10px; font-weight: bold; background: #f5f5f5;">Interest</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #000; font-weight: bold;">{interest}</td></tr>
  </table>
  <h3 style="margin-bottom: 8px;">Message:</h3>
  <div style="background: #f9f9f9; padding: 16px; border-left: 4px solid #000; white-space: pre-wrap; font-size: 14px;">{message}</div>
  <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
  <p style="color: #999; font-size: 12px;">Submitted via yasminlemke.com contact form. Reply to this email to respond directly to {name}.</p>
</body>
</html>"""

        msg.attach(MIMEText(body_text, 'plain', 'utf-8'))
        msg.attach(MIMEText(body_html, 'html', 'utf-8'))

        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, NOTIFY_EMAIL, msg.as_string())

        logger.info(f"Email notification sent for contact from {email} ({interest})")
        return True

    except Exception as e:
        logger.error(f"Failed to send email notification: {e}")
        return False


# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# Contact Form Models
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str
    email: EmailStr
    message: str
    interest: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    company: str = Field(default='', max_length=200)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=2000)
    interest: str = Field(..., min_length=1, max_length=200)


# Routes
@api_router.get("/")
async def root():
    return {"message": "Yasmin Lemke Advisory API"}


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(input: ContactSubmissionCreate):
    """Submit a contact form inquiry — saves to DB and sends email to info@yasminlemke.com"""
    contact_dict = input.model_dump()
    contact_obj = ContactSubmission(**contact_dict)
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()

    # Save to MongoDB
    _ = await db.contact_submissions.insert_one(doc)

    # Send email notification asynchronously (non-blocking)
    loop = asyncio.get_event_loop()
    loop.run_in_executor(
        email_executor,
        send_email_sync,
        input.name,
        input.company,
        str(input.email),
        input.message,
        input.interest,
    )

    return contact_obj


@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """Get all contact form submissions"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    for submission in submissions:
        if isinstance(submission['timestamp'], str):
            submission['timestamp'] = datetime.fromisoformat(submission['timestamp'])
    return submissions


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
