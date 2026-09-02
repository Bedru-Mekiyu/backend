# Express.js REST API Backend

A clean, modular RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. This repository implements core backend functionality including user authentication and content/post management with structured controllers, data models, and route separation.

---

## 🚀 Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: [Express.js](https://expressjs.com/) (v5)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) (v9)
- **Security**: [bcrypt](https://github.com/kelektiv/node.bcrypt.js) for password hashing
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)
- **Development Tooling**: [nodemon](https://nodemon.io/)

---

## ✨ Key Features

- **User Authentication**:
  - Secure user registration with email/username uniqueness checks.
  - Password hashing using `bcrypt` pre-save middleware hooks.
  - Password verification on login.
  - Logout endpoint for frontend session clearing.
- **Post Management**:
  - Complete CRUD operations for posts (Create, Read, Update, Delete).
  - Validation rules for post attributes (name, description, age range constraints).
- **Clean Architecture**:
  - Standardized directory layout separating configuration, controllers, models, and routes.

---

## 📁 Project Structure

```text
backend/
├── src/
│   ├── config/
│   │   ├── constants.js       # Global constants (e.g., DB name)
│   │   └── database.js        # MongoDB connection setup
│   ├── controllers/
│   │   ├── post.controller.js # Logic for post CRUD operations
│   │   └── user.controller.js # Logic for authentication & user management
│   ├── models/
│   │   ├── post.model.js     # Mongoose schema for Posts
│   │   └── user.model.js     # Mongoose schema & auth methods for Users
│   ├── routes/
│   │   ├── post.route.js     # Express routes for post operations
│   │   └── user.route.js     # Express routes for user authentication
│   ├── app.js               # Express application configuration & middleware
│   └── index.js             # Application entry point & server listener
├── .env.example             # Template for required environment variables
├── package.json             # Project dependencies and npm scripts
└── README.md                # Project documentation
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
PORT=8000
DB_URI=mongodb://localhost:27017
```

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port number on which the Express server listens | `8000` |
| `DB_URI` | MongoDB connection URI string | `mongodb://localhost:27017` |

---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bedru-Mekiyu/backend.git
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   ```bash
   cp .env.example .env
   ```

4. **Start the application**:
   - For production / standard execution:
     ```bash
     npm start
     ```
   - For development (with hot reloading via nodemon):
     ```bash
     npm run dev
     ```

---

## 🌐 API Reference

### User Authentication Endpoints (`/api/v1/users`)

| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| `POST` | `/api/v1/users/register` | Register a new user account | `{ "username": "...", "email": "...", "password": "..." }` |
| `POST` | `/api/v1/users/login` | Authenticate existing user | `{ "email": "...", "password": "..." }` |
| `POST` | `/api/v1/users/logout` | User logout notification | N/A |

### Post Management Endpoints (`/api/v1/posts`)

| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| `POST` | `/api/v1/posts/create` | Create a new post | `{ "name": "...", "description": "...", "age": 25 }` |
| `GET` | `/api/v1/posts/` | Fetch all posts | N/A |
| `PATCH` | `/api/v1/posts/:id` | Update an existing post by ID | `{ "name"?: "...", "description"?: "..." }` |
| `DELETE` | `/api/v1/posts/:id` | Delete a post by ID | N/A |

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).
