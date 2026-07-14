# ---------- Build Frontend ----------
FROM node:22-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# ---------- Final Container ----------
FROM python:3.12-slim
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install Backend Dependencies
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend codebase
COPY backend/ ./backend

# Copy built Next.js frontend assets
COPY --from=frontend-builder /app/frontend/public ./frontend/public
COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=frontend-builder /app/frontend/node_modules ./frontend/node_modules
COPY --from=frontend-builder /app/frontend/package.json ./frontend/package.json

# Add start script
COPY start.sh ./
RUN chmod +x start.sh

EXPOSE 3000

CMD ["./start.sh"]
