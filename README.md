<<<<<<< HEAD
# Enterprise Talent Flow Management System - Frontend

A comprehensive React-based frontend application for managing talent acquisition, skills verification, and job matching in an enterprise environment.

## Overview

The Enterprise Talent Flow Management System is a full-stack talent management platform designed to streamline the recruitment process and skill management for organizations. This repository contains the React frontend application.

### Key Features

- **User Management & Roles**
  - Admin: Full system access and management
  - Recruiter: Job posting and application management
  - Project Manager: Team and project oversight
  - Candidate: Job applications and profile management

- **Job Management**
  - Post and manage job listings
  - Track applications
  - Update job statuses

- **Skills & Proof Management**
  - Candidates can showcase their skills
  - Proof of competency for verified skills
  - Skill verification dashboard

- **Applications Tracking**
  - Track candidate applications
  - Update application statuses
  - Candidate dashboard with application history

- **Profile Management**
  - User profile customization
  - Skill endorsements
  - Experience tracking

## Project Structure

```
src/
├── api/                    # API integration layer
├── components/             # Reusable React components
│   ├── ApplicationCard.js
│   ├── DashboardTabs.js
│   ├── JobCard.js
│   ├── ProofCard.js
│   └── SkillCard.js
├── pages/                  # Page components for different routes
│   ├── AdminDashboard.js
│   ├── CandidateDashboard.js
│   ├── RecruiterDashboard.js
│   ├── ProjectManagerDashboard.js
│   └── [Other admin & user pages]
├── services/               # API service layer
│   ├── api.js
│   ├── applicationService.js
│   ├── jobService.js
│   ├── proofService.js
│   ├── SkillProofService.js
│   ├── skillService.js
│   └── userService.js
├── utils/                  # Utility functions
└── App.js                  # Main application component
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AndagundalaBhavana/Enterprise-Talent-Flow-Management-System.git
cd Enterprise-Talent-Flow-Management-System/talentflow-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the project root (if needed):
```
REACT_APP_API_URL=http://localhost:8080
```

## Available Scripts

### Development

```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Testing

```bash
npm test
```
Launches the test runner in interactive watch mode.

### Build

```bash
npm run build
```
Builds the app for production to the `build` folder with optimized performance.

## Features by Role

### Admin Dashboard
- Manage all users and roles
- View system-wide analytics
- Manage jobs and applications across the organization

### Recruiter Dashboard
- Post and manage job listings
- Review applications
- Manage candidates

### Project Manager Dashboard
- View team members and projects
- Track project progress
- Manage resource allocation

### Candidate Dashboard
- Apply for jobs
- Manage profile and skills
- Track application status
- Upload proof of skills

## API Services

The application communicates with a backend API through the services layer:

- `userService.js` - User authentication and profile management
- `jobService.js` - Job listings and management
- `applicationService.js` - Application tracking
- `skillService.js` - Skill management
- `proofService.js` - Skill proof submissions
- `SkillProofService.js` - Skill verification

## Styling

Component-specific styles are organized alongside their components:
- `*.css` files co-located with components
- Global styles in `index.css` and `App.css`

## Technologies Used

- **React** - UI framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **Fetch API** - HTTP requests

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For support, please contact the development team or create an issue in the repository.

## Related Repositories

- [Backend API](https://github.com/AndagundalaBhavana/Enterprise-Talent-Flow-Management-System) - Backend server implementation

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





