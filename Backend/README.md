# GrowthOS Backend

Node.js + Express API server.

## Setup

```bash
npm install
cp .env.example .env
```

## Run

```bash
npm run dev    # development (auto-restart on file changes)
npm start      # production
```

Server defaults to `http://localhost:5000`.

## Endpoints

| Method | Path     | Description        |
|--------|----------|--------------------|
| GET    | /health  | Health check       |
| GET    | /api     | API welcome message |
