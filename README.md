
# 📰 News Article API

This project provides a Node.js API for fetching articles from Gnews external API.

✨ Features
- Fetches articles from an external source.
- Exposes API endpoints for retrieving articles.
- Provides comprehensive API documentation.

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system.

### Configuration

The API uses environment variables that are stored in the .env file.

```bash
- NODE_ENV=local
- PORT=3000
- GNEWS_API_KEY=d69e1240def98bdaeeddb298dd846e7c
- GNEWS_API_URI=https://gnews.io/api/v4
```

### 📚 API Documentation

The API documentation was done with swagger and it is accessible through the /api-docs (http://localhost:3000/api-docs) endpoint.
There are three endpoints:

```bash
- Get N articles by keywords (AND logic)
- Get N articles by one topic
- Get an article by title (Gnews API doesnt support author search)
```

### ⚙️ Installation

```bash
- npm install
```

### 🏃 Running the API

```bash
- npm run start:dev (with Nodemon) or npm run start (without nodemon)
```

### 💾 Cache

- Express cache middleware was used to cache the endpoint responses. In a non-local environment we can use services like AWS cloudfront to cache the requests, and redis or node-cache to cache the responses of the external services

### 🛡️ Validations

- Joi library was used as middleware to validate the params of each request

