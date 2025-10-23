# Multi-stage build for production optimization
FROM node:18-alpine AS base

# Install system dependencies
RUN apk add --no-cache wget curl

# Dependencies stage
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

# Install dependencies with cache optimization
RUN npm ci --only=production --silent && \
    cd frontend && npm ci --silent && \
    cd ../backend && npm ci --only=production --silent && \
    npm cache clean --force

# Frontend build stage
FROM base AS frontend-builder
WORKDIR /app/frontend

# Copy frontend package files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm ci --silent

# Copy frontend source
COPY frontend/ ./

# Build frontend
RUN npm run build

# Backend build stage
FROM base AS backend-builder
WORKDIR /app/backend

# Copy backend package files
COPY backend/package*.json ./

# Install backend dependencies
RUN npm ci --only=production --silent

# Copy backend source
COPY backend/ ./

# Production stage
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Copy built frontend
COPY --from=frontend-builder --chown=nodejs:nodejs /app/frontend/build ./frontend/build

# Copy backend files
COPY --from=backend-builder --chown=nodejs:nodejs /app/backend ./backend

# Copy package files
COPY --chown=nodejs:nodejs package*.json ./

# Install production dependencies
RUN npm ci --only=production --silent && npm cache clean --force

# Switch to non-root user
USER nodejs

# Expose ports
EXPOSE 5000 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/health || exit 1

# Start the application
CMD ["node", "backend/server.js"]
