📌 HRMS – Human Resource Management System

A full-stack HRMS application with organization registration, login, employee management, teams, roles, and more.

Built with:

Frontend: React + Vite + Tailwind

Backend: Node.js + Express

Database: SQLite

Deployment: Frontend (Netlify) · Backend (Vercel)

🚀 Features
🔐 Authentication

Register an organization

Login with JWT

Secure password hashing (bcrypt)

🧑‍🤝‍🧑 Employees

Add / update / delete employees

Assign teams

Handle salaries & roles

🏢 Organizations

Each organization has its own employees, users, and teams

SQLite DB with persistent data

🧩 Teams

Create teams

Add employees to teams

View team-wise employee mapping

🏗️ Tech Stack
Layer	Technology
Frontend	React, Vite, Tailwind CSS
Backend	Node.js, Express
Database	SQLite
Deployment	Netlify + Vercel
📁 Project Structure
hrms/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│
└── frontend/
    ├── src/
    ├── components/
    ├── pages/
    ├── global.css
    ├── package.json

⚙️ Environment Variables

Create a .env in backend:

JWT_SECRET=your_secret_here
DB_PATH=./hrms.db

▶️ Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

🌐 Deployment
Frontend (Netlify)

Go to Netlify

Select "frontend" folder

Build command:

npm run build


Publish directory:

dist

Backend (Vercel)

Go to Vercel

Import GitHub repo

Set root directory to backend

Add environment variables

Select:

Build Command: npm install
Output: (leave empty)
Framework: Node.js


SQLite works on Vercel because DB file is stored in your project folder:

const dbPath = process.env.DB_PATH || './hrms.db';

📬 API Endpoints
Auth
Method	URL	Description
POST	/auth/register-org	Register organization
POST	/auth/login	Login
Employees
Method	URL
GET	/employees
POST	/employees
PUT	/employees/:id
DELETE	/employees/:id
Teams
Method	URL
POST	/teams
GET	/teams

Contributor:
Yamini (Full-Stack Developer)
