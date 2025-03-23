# Task Tracker

A full-stack Task Tracker app built using:

- **Frontend**: React (with Vite)
- **Backend**: Spring Boot (Java)
- **Database**: H2 (In-memory)

## Features

- Add new tasks
- Toggle task completion
- Delete tasks
- View a list of all tasks

## Requirements

- **Node.js** (for running frontend)
- **Java 17+** (for running backend)

## Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-tracker.git


```mermaid
flowchart TD
    A[User] --> B[React Frontend]
    B --> C[Spring Boot API Endpoints]
    C --> D[H2 Database]
    B --> E[Task List]
    B --> F[Task Form]
    E --> G[GET /api/tasks]
    F --> H[POST /api/tasks]
    C --> I[PUT /api/tasks/id]
    C --> J[DELETE /api/tasks/id]

