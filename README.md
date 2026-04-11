# Fullstack React + Express Project

This project is a fullstack application with a React frontend and an Express backend. The frontend provides page routes for the user interface, while the backend exposes API endpoints for those pages and serves the built React app in production. Frontend pages load backend data using `fetch` inside `useEffect`.

## Tech Stack

- React
- TypeScript
- Vite
- Node.js
- Express
- CORS

## Project Structure

```text
.
├── README.md
├── package.json
├── node_modules/
├── typescript/
│   ├── package.json
│   ├── src/
│   ├── server/
│   ├── dist/
│   └── vite.config.ts
└── zxc/
```

## Installation

Install dependencies in the project you want to run:

```bash
npm install
```

For the React + Express app:

```bash
cd typescript
npm install
```

## Running the Project

### Development Mode (Frontend Only)

```bash
cd typescript
npm run dev
```

### Production Mode (Fullstack via Express)

```bash
cd typescript
npm run build
node server/index.js
```

## Available Routes

### Frontend Routes

- `/`
- `/about`
- `/login`
- `/register`

### API Routes

- `/api/home`
- `/api/about`
- `/api/login`
- `/api/register`

## Notes

- The React app is served from `dist` in production.
- API data is fetched using `fetch` and `useEffect`.
- The Express server runs on port `5000`.
