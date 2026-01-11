# Escode.sk

## Purpose

Professional website for escode.sk - providing Software Development, Testing and Consulting Services. This repository hosts a React-based Progressive Web Application (PWA) showcasing company services and portfolio.

Live demo: https://www.escode.sk

## Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript
- **Build Tool**: React Scripts (Create React App)
- **Animations**: React Spring
- **Deployment**: GitHub Pages
- **PWA**: Service Worker enabled

## Installation

Install project dependencies using npm:

```bash
npm install
```

## Local Development

To run the project locally in development mode:

```bash
npm start
```

This will start the development server at `http://localhost:3000`. The page will automatically reload when you make changes.

## Testing

Run the test suite:

```bash
npm test
```

For a single test run (non-watch mode):

```bash
npm test -- --watchAll=false
```

## Build

Create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

Deploy the built application to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Create a production build (`npm run build`)
2. Deploy to GitHub Pages with custom CNAME configuration for www.escode.sk

**Note**: Deployment is automated via CI/CD when changes are merged to the master branch.