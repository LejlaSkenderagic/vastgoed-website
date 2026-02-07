# Vastgoed Website

Fullstack website met Node.js backend en React frontend.

## Mappenstructuur

```
vastgoed-website/
├── frontend/          # React + Vite
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js + Express
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
# Pas .env aan met jouw email details
npm start
```

Backend draait op `http://localhost:3000`
Frontend draait op `http://localhost:5173`

## .env configuratie Backend

1. Gmail app password:
   - Ga naar [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Selecteer "Mail" en "Windows Computer"
   - Kopieer het wachtwoord en vul in `.env`

2. Update `EMAIL_USER`, `EMAIL_PASS` en `COMPANY_EMAIL` in `.env`
