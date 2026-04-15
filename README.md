# Multi-Container Application

Simple multi-container Node.js application built with Express, MongoDB, and Docker Compose.  
Supports full CRUD operations for a Todo API and runs in a Dockerized environment.

---

## Features

- REST API for todo management
- Full CRUD operations (create, read, update, delete)
- MongoDB database integration
- Docker Compose multi-container setup
- Persistent data storage with Docker volumes
- CI pipeline with GitHub Actions
- Docker image published to Docker Hub

---

## Setup

git clone https://github.com/mykytapilets/multi-container-application.git
cd multi-container-application
docker-compose up --build

API: http://localhost:3000

---

## API

### Get all todos
GET /api/todos

### Get todo by id
GET /api/todos/:id

### Create todo
POST /api/todos
Body:
{
  "title": "My todo"
}

### Update todo
PUT /api/todos/:id

### Delete todo
DELETE /api/todos/:id

---

## Docker

The project runs with Docker Compose:

- API service (Node.js + Express)
- MongoDB service
- Automatic network connection between services
- Persistent volume for database storage

---

## CI/CD

GitHub Actions pipeline:

- Install dependencies
- Build TypeScript project
- Build Docker image
- Push image to Docker Hub

Docker image:
mykytapilets/todo-api:latest

---

## Notes

- MongoDB runs inside Docker container
- Data persists using Docker volume
- API runs on port 3000
- Environment variables are defined in api/.env

---

## Project

https://roadmap.sh/projects/multi-container-service