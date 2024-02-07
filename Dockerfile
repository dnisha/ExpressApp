#first stage
FROM node:18.15.0-alpine AS builder
WORKDIR /app
COPY *.js /app
COPY package.json /app
RUN npm install --production

#second stage
#FROM gcr.io/distroless/nodejs18-debian11
FROM node:18.15.0-alpine
WORKDIR /app
COPY --from=builder /app /app
USER root
# EXPOSE 8080
CMD ["app.js"]