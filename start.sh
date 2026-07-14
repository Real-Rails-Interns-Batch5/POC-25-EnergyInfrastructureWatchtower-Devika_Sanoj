#!/bin/sh
echo "Starting FastAPI backend..."
cd /app/backend
uvicorn app.main:app --host 127.0.0.1 --port 8000 > /app/backend.log 2>&1 &
BACKEND_PID=$!

# Wait for backend to be ready
echo "Waiting for backend to start..."
for i in $(seq 1 30); do
    if curl -s http://127.0.0.1:8000/ > /dev/null; then
        echo "Backend is up!"
        break
    fi
    echo "Waiting... ($i)"
    sleep 1
done

# Print backend log in case it failed
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    echo "Backend failed to start! Logs:"
    cat /app/backend.log
    exit 1
fi

echo "Starting Next.js frontend..."
cd /app/frontend
npm start
