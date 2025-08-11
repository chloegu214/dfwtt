# DFWTT

A web application for the Dallas–Fort Worth Table Tennis community built with Next.js and React. The site provides club information, tournament results, instructional resources and community news.

## Features
- **About** page outlining the club mission and values and displaying current location notices and schedules.
- **Scoreboard** with searchable and filterable tournament results.
- **Monthly Doubles** archive tracking class rankings across events.
- **How to Serve** guide explaining legal serving technique under current ITTF rules.
- **News** and **Gallery** sections for club announcements and photos.

## Tech Stack
- [Next.js](https://nextjs.org/) 15 (App Router) with React 19 and TypeScript
- Tailwind CSS with shadcn/ui and Radix UI primitives
- Jest for unit testing

## Getting Started

### Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Runs the development server at `http://localhost:3000`.

### Production Build
```bash
npm run build
npm start
```

### Tests
```bash
npm test
```

## Project Structure
```
app/                # Route segments for pages
components/         # UI and page components
lib/                # Utility functions and tests
public/             # Static assets
styles/             # Global styles
```

## Deployment
The application can be deployed to any Node-compatible host. A Vercel deployment is available at:
https://v0-new-project-izsvuko6cd6-git-dev-chloes-projects-605324d5.vercel.app/

## License
This project does not include a license file; all rights reserved.
