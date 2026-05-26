# CRUD Login System - Docker & Cloud Computing

A modern authentication CRUD system developed using Node.js, MongoDB, Docker and cloud deployment technologies.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Docker
- Docker Compose
- Render
- EJS
- CSS
- JavaScript

---

# Features

- User registration
- Login authentication
- Admin dashboard
- Edit users
- Delete users
- Password encryption with bcrypt
- Dark/Light theme
- Persistent MongoDB storage
- Docker containerization
- Cloud deployment

---

# Docker Commands

## Build image

```bash
docker build -t youruser/crud-login .
```

## Run containers

```bash
docker compose up --build
```

## Stop containers

```bash
docker compose down
```

---

# Docker Hub

```bash
docker push youruser/crud-login
```

---

# Cloud Deployment

This project was deployed using:

- Render
- MongoDB Atlas

---

# Environment Variable

```env
MONGO_URL=your_mongodb_atlas_url
```

---

# Project Structure

```txt
crud-docker/
├── app/
│   ├── public/
│   ├── views/
│   ├── server.js
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

# Author

Pedro Vinicius
