# Nepali Connect UI

A React-based social networking platform designed for the Nepali diaspora in Dallas. Connect with community members, find matches, and explore job opportunities.

## Features

- **Hero Section**: Eye-catching landing page with call-to-action
- **About Section**: Platform information and mission statement
- **Services Section**: Key features and services offered
- **Discover Page**: Swipeable card interface to find matches
- **Authentication**: Firebase integration for secure login/signup
- **Responsive Design**: Mobile-friendly UI with smooth scrolling

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) — [Download here](https://nodejs.org/)
- **npm** (v6 or higher) — comes with Node.js

To verify installation:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if using git):
```bash
git clone <repository-url>
cd nepali-connect-ui
```

2. **Install dependencies**:
```bash
npm install
```

This will install all packages listed in `package.json`, including:
- React & React DOM (v17)
- React Router DOM (v5)
- Firebase (v12)
- React Spring (animation library)
- React Tinder Card (swipeable cards) — *Note: may need troubleshooting*
- Testing libraries (Jest, React Testing Library)
- And other utilities

3. **Configure Firebase** (optional):
   - Open `src/firebase.js`
   - Replace placeholder API keys with your Firebase project credentials:
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

## Available Scripts

### Development

Start the development server (with hot-reload):
```bash
npm start
```

The app will open in your browser at `http://localhost:3000` (or the next available port).

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Output files will be in the `build/` directory.

### Run Tests

Execute test suite:
```bash
npm test
```

### Eject Configuration (Advanced)

Expose all webpack and build configuration (⚠️ **irreversible**):
```bash
npm run eject
```

## Project Structure

```
nepali-connect-ui/
├── public/
│   └── index.html          # Main HTML entry point
├── src/
│   ├── components/
│   │   ├── AboutSection.js
│   │   ├── CTASection.js
│   │   ├── Discover.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── ProfileCard.js
│   │   ├── ScrollToTop.js
│   │   ├── ServiceCard.js
│   │   ├── ServicesSection.js
│   │   ├── SignUp.js
│   │   ├── StatsSection.js
│   │   └── *.module.css    # Scoped CSS modules
│   ├── App.js              # Root component
│   ├── App.css
│   ├── firebase.js         # Firebase config & auth
│   ├── index.js            # React entry point
│   ├── index.css
│   └── ...
├── package.json            # Dependencies & scripts
├── package-lock.json       # Locked dependency versions
└── README.md               # This file
```

## Dependencies

### Main Dependencies
- **react** (^17.0.2) — UI library
- **react-dom** (^17.0.2) — DOM rendering
- **react-router-dom** (^5.3.3) — Client-side routing
- **firebase** (^12.5.0) — Authentication & backend
- **react-spring** (^8.0.27) — Animation library
- **react-tinder-card** (^1.6.4) — Swipeable card component
- **react-scripts** (5.0.1) — Build tools (Create React App)
- **cross-env** (^7.0.3) — Environment variable management
- **@react-spring/web** (^9.7.5) — Advanced animations
- **process** (^0.11.10) — Node.js process polyfill
- **web-vitals** (^2.1.4) — Performance monitoring

### Development Dependencies
- **Testing libraries** — Jest, React Testing Library, React Testing Library DOM
- **ESLint** — Code quality
- **express** (^5.1.0) — Optional server framework

## Running the Project

### Quick Start

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will auto-reload when you make changes.

### Build for Deployment

```bash
npm run build
```

Creates a production-optimized build in the `build/` folder.

### Run Tests

```bash
npm test
```

Launches the test runner.

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is busy, React will prompt you to use the next available port (e.g., 3001). Accept the prompt.

### Module Not Found / Dependency Errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Firebase Configuration Missing

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Update `src/firebase.js` with your config
3. Enable Google Sign-In in Firebase Console

### React Tinder Card Issues

If you encounter errors with `react-tinder-card`:
- Check `src/components/Discover.js` for implementation details
- Consider using a custom swipe implementation if needed

### Build Errors with OpenSSL

The project uses `cross-env NODE_OPTIONS=--openssl-legacy-provider` to handle OpenSSL compatibility with Node v17+. This is configured in `package.json` scripts.

## Environment Setup

1. **Node.js**: v14 or higher required
2. **npm**: v6 or higher
3. **Optional**: Firebase account for authentication

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Deployment Options

### Netlify
```bash
npm run build
# Push to GitHub, connect to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

## Project Information

- **Created**: 2024
- **Last Updated**: November 2025
- **Node Version**: v14+ (tested on v22.18.0)
- **npm Version**: v6+ (latest)

## License

[Add your license here]

## Support & Contact

For questions or issues, please contact the development team or open an issue on GitHub.
