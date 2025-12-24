# Signup Automation - QA_TASK

## Project Overview
This project is a **Cypress-based automated testing suite** for a web application. The main focus is on **signup, login, and profile setup flows**, including email verification (OTP). The tests validate both frontend and backend functionality and ensure the core flows work as expected.

## Table of Contents
- [Project Structure](#project-structure)  
- [Tested Features](#tested-features)  
- [Test Cases](#test-cases)  
- [Automation Details](#automation-details)  
- [Known Limitations](#known-limitations)  
- [Setup & Installation](#setup--installation)  
- [GitHub Repository](#github-repository)  

## Tech Stack & Environment
- Lanquage: JavaScript
- Automation Framework: Cypress
- Node.js Version: v18+
- Cypress Version: 13+
- Browser: Chrome , Edge , Electron
- OS: Window 

## Project Structure
<img width="775" height="508" alt="image" src="https://github.com/user-attachments/assets/13f971b1-7605-4002-acfe-4098da5b93fd" />


## Tested Features
### Login Flow
  - Valid login credentials
  - Invalid credentials validation
### Signup Flow
  - Step 1: User details & terms acceptance
  - Step 2: Account setup & OTP verification
  - Step 3: Complete profile setup (Agency, Experience, Preferences)
### Email Verification
  - OTP verification partially automated (limitations explained below)

## Test Cases (Sample)
| Test Case ID | Scenario | Expected Result | Actual Result | Status |
|--------------|---------|----------------|---------------|--------|
| TC-01 | Signup with valid details | User proceeds to next step | As expected | Pass |
| TC-02 | Submit without required fields | Validation error shown | As expected | Pass |
| TC-03 | Email verification | OTP verified | Not automated | Blocked |
| TC-04 | Login with valid credentials | User redirected to dashboard | As expected | Pass |
| TC-05 | Login with invalid credentials | Error message shown | As expected | Pass |


## Automation Details
### Tool: Cypress  
### Type: End-to-end testing  
### Browser: Chrome  
### Environment: Staging / Production (depending on test run)  
### Custom Commands:Defined in `cypress/support/commands.js`  

## Known Limitations
### Email Verification (OTP):  
  Due to frontend and backend validation, the email OTP could not be mocked or intercepted. The verification code is sent to a real email service. To test the remaining flows, the next page was accessed by bypassing the OTP verification step.  

- Some *UI validations* may vary based on browser and environment.

## Setup & Installation

1. Navigate into the project: 
Install dependencies:
- npm install

Run tests:
- npx cypress open

or for headless mode:
- npx cypress run

## GitHub Repository

Repository Link: Your GitHub Repo

All Cypress test files are located in the cypress/e2e/ folder.

# Conclusion

The project successfully automates critical user flows (signup, login, and profile completion). Known limitations regarding OTP verification are documented. The tests are modular, reusable, and maintainable, making it easy to extend coverage in the future.

Author

Mahima Chaudhary
Email: mahimac346@gmail.com
GitHub: Mahimac707


