import requests
import sys
from datetime import datetime
import json

class YasminLemkeAPITester:
    def __init__(self, base_url="https://compliance-masters.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, expected_response_keys=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=30)

            success = response.status_code == expected_status
            
            # Get response data
            try:
                response_data = response.json()
            except:
                response_data = response.text

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check expected response keys
                if expected_response_keys and isinstance(response_data, dict):
                    for key in expected_response_keys:
                        if key not in response_data:
                            print(f"⚠️  Warning: Expected key '{key}' not in response")
                        else:
                            print(f"   ✓ Found expected key: {key}")
                            
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response_data}")

            self.results.append({
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": response_data
            })

            return success, response_data

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.results.append({
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": None,
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_health_check(self):
        """Test API health endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "health",
            200,
            expected_response_keys=["status", "timestamp"]
        )

    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test(
            "Root Endpoint",
            "GET",
            "",
            200,
            expected_response_keys=["message"]
        )

    def test_status_post(self):
        """Test status check creation"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        
        return self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data=test_data,
            expected_response_keys=["id", "client_name", "timestamp"]
        )

    def test_status_get(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission - Corporate Advisory"""
        test_data = {
            "name": "John Test User",
            "company": "Test Company Inc",
            "email": "test@example.com",
            "message": "This is a test message for corporate advisory services.",
            "interest": "Corporate Advisory"
        }
        
        return self.run_test(
            "Contact Form - Corporate Advisory",
            "POST",
            "contact",
            200,
            data=test_data,
            expected_response_keys=["id", "name", "company", "email", "message", "interest", "timestamp"]
        )

    def test_contact_form_submission_career(self):
        """Test contact form submission - Career Mentorship"""
        test_data = {
            "name": "Jane Test User",
            "company": "Another Test Corp",
            "email": "jane@example.com",
            "message": "I need help with career advancement and Big Tech interviews.",
            "interest": "Career Mentorship"
        }
        
        return self.run_test(
            "Contact Form - Career Mentorship",
            "POST",
            "contact",
            200,
            data=test_data,
            expected_response_keys=["id", "name", "company", "email", "message", "interest", "timestamp"]
        )

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        # Test with missing required fields
        invalid_data = {
            "name": "",
            "company": "Test Company",
            "email": "invalid-email",
            "message": "",
            "interest": "Invalid Option"
        }
        
        return self.run_test(
            "Contact Form - Validation Error",
            "POST",
            "contact",
            422,  # Validation error expected
            data=invalid_data
        )

    def test_get_contact_submissions(self):
        """Test getting contact form submissions"""
        return self.run_test(
            "Get Contact Submissions",
            "GET",
            "contact",
            200
        )

def main():
    print("🚀 Starting Yasmin Lemke Advisory API Tests")
    print("=" * 60)
    
    tester = YasminLemkeAPITester()

    # Run all tests
    tests = [
        tester.test_health_check,
        tester.test_root_endpoint,
        tester.test_status_post,
        tester.test_status_get,
        tester.test_contact_form_submission,
        tester.test_contact_form_submission_career,
        tester.test_contact_form_validation,
        tester.test_get_contact_submissions
    ]

    for test_func in tests:
        try:
            test_func()
        except Exception as e:
            print(f"❌ Test failed with exception: {str(e)}")

    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    print("=" * 60)
    
    # Print detailed results
    print("\n📋 Detailed Results:")
    for result in tester.results:
        status = "✅ PASS" if result['success'] else "❌ FAIL"
        print(f"{status} - {result['test']} ({result['method']} {result['endpoint']})")
        
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())