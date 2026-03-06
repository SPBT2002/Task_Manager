<div align="center">

# ✅ TaskFlow

### A Modern Full-Stack Task Management Application

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

*Organize your work. Track progress. Get things done.*

</div>

---

## 📌 Overview

**TaskFlow** is a full-stack task management web application built with **React**, **Node.js**, **Express**, and **MongoDB Atlas**. Designed for individuals who want a simple yet powerful way to organize their daily work, TaskFlow gives you full control over your tasks — from creation to completion.

### 🧠 What is TaskFlow?

TaskFlow is a personal productivity tool that helps you **plan**, **track**, and **complete** your tasks efficiently. Whether you're managing personal to-dos, work assignments, or project milestones, TaskFlow provides a clean and intuitive interface to keep everything organized in one place.

### 💡 What Can You Do With TaskFlow?

| Action | Description |
|--------|-------------|
| 📝 **Create Tasks** | Add new tasks with a title and detailed description |
| ✏️ **Edit Tasks** | Update task title or description at any time |
| 🗑️ **Delete Tasks** | Remove tasks you no longer need (with confirmation) |
| 🔄 **Update Status** | Click the status badge to cycle through Pending → In Progress → Completed |
| 📊 **View Stats** | See live counts of total, pending, in-progress, and completed tasks |
| 🔍 **Filter Tasks** | Switch between All / Pending / In Progress / Completed views |
| 🔐 **Secure Login** | Each user has their own private task list protected by JWT authentication |
| 📱 **Use Anywhere** | Fully responsive — works on desktop, tablet, and mobile |

### 🎯 Who Is It For?

- **Students** managing assignment deadlines and study tasks
- **Developers** tracking bugs, features, and project milestones
- **Freelancers** organizing client work and deliverables
- **Anyone** who wants a lightweight personal task tracker

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure login & session management
- 📋 **Task Management** — Create, edit, delete tasks with ease
- 🔄 **3-Step Status Cycle** — Click badge to cycle: `Pending` → `In Progress` → `Completed`
- 📊 **Stats Dashboard** — Live counts for Total, Pending, In Progress, and Completed tasks
- 🔍 **Filter Tabs** — View All / Pending / In Progress / Completed
- 👤 **User-specific Data** — Each user sees only their own tasks
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- ⚡ **Fast & Modern** — Vite-powered frontend with Tailwind CSS

---

## 🗂️ Folder Structure

```
Task_Manager/
├── backend/                    # Node.js + Express API
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js   # Register, Login, GetMe
│   │   └── taskController.js   # CRUD + Stats
│   ├── middleware/
│   │   └── auth.js             # JWT protect middleware
│   ├── models/
│   │   ├── User.js             # User schema (bcrypt)
│   │   └── Task.js             # Task schema
│   ├── routes/
│   │   ├── authRoutes.js       # /api/auth/*
│   │   └── taskRoutes.js       # /api/tasks/*
│   ├── .env                    # Environment variables
│   ├── seedUser.js             # Test user seed script
│   ├── server.js               # Entry point
│   └── package.json
│
└── frontend/                   # React + Vite + Tailwind
    ├── src/
    │   ├── components/
    │   │   ├── HeaderSection.jsx   # Navbar + logout
    │   │   ├── StatsCards.jsx      # 4 stat cards
    │   │   ├── TaskCard.jsx        # Single task card
    │   │   ├── TaskForm.jsx        # Add / Edit modal
    │   │   └── TaskList.jsx        # Filter + task list
    │   ├── pages/
    │   │   ├── LoginPage.jsx       # Login form
    │   │   └── DashboardPage.jsx   # Main dashboard
    │   ├── services/
    │   │   ├── api.js              # Axios instance + interceptors
    │   │   ├── authService.js      # Auth API calls
    │   │   └── taskService.js      # Task API calls
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev        # Development (with nodemon)
# or
npm start          # Production
```

Backend will run on → **http://localhost:5001**

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on → **http://localhost:5173**

---

### 4️⃣ Seed Test User (Optional)

To add a default test user to the database:

```bash
cd backend
node seedUser.js
```

This creates:
| Field    | Value                |
|----------|----------------------|
| Email    | user@taskflow.com    |
| Password | user123              |

---

## 🔌 API Endpoints

### Auth

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| POST   | `/api/auth/register`  | Register new user   |
| POST   | `/api/auth/login`     | Login user          |
| GET    | `/api/auth/me`        | Get current user    |

### Tasks

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/tasks`       | Get all tasks       |
| POST   | `/api/tasks`       | Create new task     |
| PUT    | `/api/tasks/:id`   | Update task         |
| DELETE | `/api/tasks/:id`   | Delete task         |
| GET    | `/api/tasks/stats` | Get task counts     |

---

## 🛠️ Tech Stack

### Frontend
| Tech | Version | Purpose |
|------|---------|---------|
| React | 19.2.0 | UI Library |
| Vite | 8.0 | Build Tool |
| Tailwind CSS | 4.2 | Styling |
| React Router DOM | 7.13 | Routing |
| Axios | 1.13 | HTTP Client |

### Backend
| Tech | Version | Purpose |
|------|---------|---------|
| Node.js | 20 | Runtime |
| Express | 4.18 | Web Framework |
| MongoDB + Mongoose | 8.0 | Database |
| JWT | 9.0 | Authentication |
| bcryptjs | 2.4 | Password Hashing |
| dotenv | 16.3 | Environment Variables |
| nodemon | 3.0 | Dev Auto-restart |

---

## 📋 Task Status Flow

```
[ Pending ] ──► [ In Progress ] ──► [ Completed ]
     ▲                                    │
     └────────────────────────────────────┘
              (click badge to cycle)
```

---

## 🔒 Authentication Flow

```
1. User logs in  →  POST /api/auth/login
2. Backend returns JWT token
3. Token stored in localStorage
4. Every API request sends: Authorization: Bearer <token>
5. Backend verifies token → serves user-specific data
6. Token expires in 30 days
```

---

## 📸 Screenshots

> *Login Page → Clean, minimal login form with password visibility toggle*

> *Dashboard → Stats cards, filter tabs, task cards with hover actions*

---

## 👨‍💻 Author

Supun Piyumal.

---

<div align="center">

⭐ If you found this useful, give it a star!

</div>
