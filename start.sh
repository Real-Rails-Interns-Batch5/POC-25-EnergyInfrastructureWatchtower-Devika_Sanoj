#!/bin/sh
# Start FastAPI backend internally on port 8000
cd /app/backend && uvicorn app.main:app --host 127.0.0.1 --port 8000 &

# Start Next.js frontend (exposed to the internet) on port 3000
cd /app/frontend && npm start
