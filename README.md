
# HYPEPAD Launchpad (Full-Stack Setup)

This is a full-stack boilerplate for the HYPEPAD launchpad project.

## 📁 Project Structure

```
hypepad-launchpad/
├── frontend/              # React UI (Launchpad)
│   ├── public/
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json
│   └── vercel.json
├── backend/               # Express API
│   ├── index.js
│   ├── package.json
│   ├── routes/
│   ├── controllers/
│   └── models/
└── README.md
```

## 🚀 Getting Started

### Frontend (React)
```bash
cd frontend
npm install
npm start
```

### Backend (Node.js + Express)
```bash
cd backend
npm install
npm run dev
```

Visit:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000/api/test`

---

## ✅ Features Included

- React frontend with `react-router-dom` and responsive layout
- Starter pages: Home, Create, Dashboard, Staking
- Theme: Orange/Black (HYPEPAD)
- Express backend with `/api/test` route
