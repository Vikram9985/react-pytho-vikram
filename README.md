"# react-pytho-vikram" 
# React + Python (FastAPI) Admin Dashboard

A **full‑stack admin dashboard** built with **React (Tailwind CSS)** on the frontend and **Python (FastAPI)** on the backend. This project demonstrates authentication, dashboards, charts, maps, and clean Git practices in a single repository.

---

## ✨ Features

### Frontend (React)

* Login page (User ID & Password)
* Protected Dashboard
* Sidebar navigation
* Stats cards
* Earnings chart (Day / Week / Month)
* Active operations table
* Live map view (Leaflet)
* Responsive UI with Tailwind CSS

### Backend (Python – FastAPI)

* Login API
* Earnings API
* Rides API
* CORS enabled for React
* Swagger UI for API testing

---

## 🧱 Tech Stack

**Frontend**

* React
* Tailwind CSS
* React Router
* Recharts (Charts)
* React‑Leaflet (Maps)

**Backend**

* Python
* FastAPI
* Uvicorn

**Tools**

* Git & GitHub
* VS Code

---

## 📁 Project Structure

```
react-python-project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/react-python-project.git
cd react-python-project
```

---

## ▶️ Run Backend (FastAPI)

```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

* Backend URL: `http://localhost:8000`
* Swagger Docs: `http://localhost:8000/docs`

---

## ▶️ Run Frontend (React)

```bash
cd frontend
npm install
npm start
```

* Frontend URL: `http://localhost:3000`

---

## 🔐 Demo Login Credentials

> **Note:** For learning/demo only

```
User ID: admin
Password: 1234
```

Credentials are validated in the **backend login API**.

---

## 🔁 API Endpoints

### Login

```
POST /api/login
```

### Earnings Data

```
GET /api/earnings?type=day|week|month
```

### Active Rides

```
GET /api/rides
```

---

## 🧪 Git Workflow

```bash
git status
git add .
git commit -m "Meaningful message"
git push
```

### .gitignore Highlights

* `frontend/node_modules/`
* `frontend/build/`
* `backend/__pycache__/`
* `backend/venv/`

---

## ⚠️ Important Notes

* `node_modules` is **not** pushed to GitHub
* `.env` files are ignored
* Hardcoded login is for learning only

---

## 🔮 Future Enhancements

* Database integration (MySQL / MongoDB)
* JWT authentication
* Role‑based access
* Deployment (Vercel / Render)
* Real‑time updates

---

## 🧠 Interview Summary

> “I built a full‑stack admin dashboard using React and FastAPI. The frontend communicates with backend APIs for authentication, charts, and tables. I used Git for version control and structured the project as a monorepo.”

---

## 👨‍💻 Author

**Vikram**
Frontend / Full‑Stack Developer

---

⭐ If you like this project, give it a star on GitHub!
