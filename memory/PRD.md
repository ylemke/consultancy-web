# PRD - Yasmin Lemke Executive Career Mentorship Website

## Original Problem Statement
Build a premium, multi-page, ultra-minimalist luxury mentorship website for Yasmin Lemke. The site focuses **exclusively on B2C career mentorship** (strategic pivot from original B2B/B2C dual-purpose model due to professional conflict of interest).

## Target Audience
- Ambitious professionals seeking Big Tech roles
- Executives in career transition
- Senior professionals looking to master interview processes

## Core Requirements

### Aesthetic
- Pristine white (#FFFFFF) background
- Massive whitespace
- Large high-contrast typography (Inter or SF Pro)
- Minimalist gold (#D4AF37) accents for CTAs
- B&W to color image hover effect

### Pages
1. **Home** - Hero with headline, subheadline, single CTA, trust banner
2. **Mentoring** - 3 services: Big Tech Interview Mastery, Executive Presence & Storytelling, Career Acceleration Strategy
3. **About** - Bio focused on career mentorship credentials
4. **Contact** - Form with mentorship-focused dropdown + Calendly embed
5. **404** - Page not found handler

### Multi-language Support
- English (default)
- Portuguese (PT-BR)
- Spanish (ES)

## Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion
- **Backend:** FastAPI (Python)
- **Database:** MongoDB (contact form submissions)
- **i18n:** Custom React Context-based system (LanguageContext.jsx)
- **Calendar:** react-calendly integration

## What's Been Implemented

### December 2025 - Strategic Pivot Complete
- ✅ Deleted CompaniesPage.jsx (B2B content removed)
- ✅ Created MentoringPage.jsx (replaced CareersPage)
- ✅ Updated HomePage.jsx with B2C-only content and single CTA
- ✅ Updated Navigation.jsx - removed Companies link
- ✅ Updated Footer.jsx - removed Companies link
- ✅ Updated AboutPage.jsx - removed B2B expertise section
- ✅ Updated ContactPage.jsx - mentorship-focused dropdown options
- ✅ Updated App.js routing (/mentoring instead of /careers, removed /companies)
- ✅ Added NotFoundPage.jsx for 404 handling
- ✅ All translations updated in LanguageContext.jsx (EN, PT, ES)
- ✅ Testing completed: 100% pass rate (18/18 tests)

### Previous Implementations
- ✅ Full multi-language support (EN, PT, ES)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ B&W to color image hover effect
- ✅ Calendly integration on contact page
- ✅ LinkedIn links throughout site
- ✅ Contact form with MongoDB backend
- ✅ Default language set to English

## Architecture

```
/app/
├── backend/
│   └── server.py         # FastAPI with /api/contact endpoint
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── context/
│   │   │   └── LanguageContext.jsx  # All translations
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── MentoringPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
```

## API Endpoints
- `POST /api/contact` - Submit contact form inquiry

## Database Schema
- **contacts:** `{name, email, company, interest, message, date}`

## Deployment
- Frontend: Vercel (user has been guided on setup)
- Backend: Emergent environment
- Domain: Arsys (user's registrar)

## Backlog/Future Enhancements
- P2: Minor mobile language switcher timing optimization
- P3: Analytics integration
- P3: SEO optimization
