FROM node:18.15.0-alpine AS builder
WORKDIR /app

# Copy package descriptors first to leverage Docker layer caching
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy application source files
COPY *.js ./

# Second stage: runtime environment
FROM node:18.15.0-alpine
WORKDIR /app

# Copy built app and dependencies from builder stage
COPY --from=builder /app ./

# Explicitly use node to execute app.js
EXPOSE 8080
CMD ["node", "app.js"]
