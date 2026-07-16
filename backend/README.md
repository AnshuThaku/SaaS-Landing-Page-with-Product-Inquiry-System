# CRM Backend

Express and MongoDB foundation for the CRM SaaS application. This project currently contains configuration and middleware only; routes, controllers, models, and business logic are intentionally not implemented yet.

## Setup

1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Install dependencies with `npm install`.
3. Start development mode with `npm run dev`.

## Scripts

- `npm run dev` — run with automatic restart through Nodemon.
- `npm start` — run the production server.

## Structure

`src/app.js` configures Express and middleware. `src/server.js` loads environment variables, connects MongoDB, then starts the HTTP server. The remaining folders are reserved for future MVC layers.
