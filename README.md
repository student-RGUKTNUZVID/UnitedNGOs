---

# 🌍 UnitedNGOs — Empowering Collaboration for Social Impact

![React](https://img.shields.io/badge/React-18.2-blue)
![Express](https://img.shields.io/badge/Express-4.18-green)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-darkgreen)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![Socket.io](https://img.shields.io/badge/Socket.io-Optional-black)

---

## 🚀 **Live Demo**

🔗 **[View Live NGO Connect Here](https://unitedngos-3.onrender.com/ )**

---

The **NGO Connect** web application is a full-stack **MERN** project designed to bridge the gap between **NGOs and volunteers**.
It allows multiple NGOs to **register, create events, collaborate**, and raise **donations**. Volunteers can discover **nearby NGOs and events**, register to participate, and join **relief or social service activities** based on their interests and location.

This platform aims to create **united action during emergencies**, ensuring faster relief and impactful community work.

---

## 🧩 Folder Structure

```
NGO-CONNECT/
├── backend/                 # Express + MongoDB backend
│   ├── config/              # Database & environment setup
│   ├── controllers/         # Event, NGO, User & Donation controllers
│   ├── models/              # Mongoose Schemas (User, NGO, Event, Donation)
│   ├── routes/              # API Routes for NGOs, Users, Events, Donations
│   ├── middleware/          # Auth & role-based access control
│   └── server.js            # Backend entry point
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Login, Register, NGO Dashboard, Events, Donations
│   │   ├── context/         # Auth & NGO context
│   │   ├── utils/           # API & helper functions
│   │   ├── App.jsx          # Main app routes
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── package.json
├── README.md
└── .gitignore
```

---

## ✨ Features
```

✅ **Multi-NGO Registration & Login**
✅ **Volunteer Registration and Participation**
✅ **Event Creation & Management by NGOs**
✅ **Donation Management System** (Fund, Food, and Essentials)
✅ **Nearby NGO & Event Discovery** (based on user location/interests)
✅ **NGO Collaboration for Joint Campaigns**
✅ **Relief & Disaster Response Coordination**
✅ **Real-time Updates for Ongoing Events** (optional Socket.io integration)
✅ **Responsive UI built with React + Tailwind CSS**
```

---

## 📚 Pages Overview

| Page               | Path / Route     | Description                                                             |
| :----------------- | :--------------- | :---------------------------------------------------------------------- |
| **Home**           | `/`              | Displays overview of all NGOs, upcoming events, and campaigns.          |
| **Login**          | `/login`         | Authenticates NGO or volunteer user.                                    |
| **Register**       | `/register`      | Allows new NGOs or volunteers to register.                              |
| **NGO Dashboard**  | `/ngo/dashboard` | NGOs can create, edit, or collaborate on events and view donations.     |
| **Events**         | `/events`        | Displays all upcoming and active NGO events.                            |
| **Donation Page**  | `/donate/:id`    | Allows users to donate funds, food, or resources to specific campaigns. |
| **Volunteer Page** | `/volunteers`    | Displays volunteers based on their nearby NGOs and interests.           |
| **Collaboration**  | `/collab`        | NGOs can connect and plan joint initiatives for social causes.          |
| **Profile**        | `/profile`       | Shows NGO/volunteer profile and participation history.                  |

---

## ⚙️ How It Works (Flow)

1. **NGO or Volunteer registers** on the platform.
2. NGOs can **create events, relief drives, or donation campaigns**.
3. Volunteers can **explore nearby NGOs** and register for participation.
4. NGOs can **collaborate with other NGOs** for large-scale impact.
5. During crises (like floods or earthquakes), NGOs can **raise urgent donation drives**, and **volunteers in that region are notified** to take immediate action.
6. Donations and volunteer details are **stored and tracked via MongoDB**.

---

## 📥 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/student-RGUKTNUZVID/UnitedNGOs.git```

### 2. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Setup Environment Variables

Create a `.env` file inside the `backend` folder:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
PORT=5000
```

### 4. Run the App

```bash
# Run backend
cd backend
npm run dev

# Run frontend
cd ../frontend
npm run dev
```

Access it at [http://localhost:5173](http://localhost:5173)

---

## 🔧 Built With

* [React](https://reactjs.org/) – Frontend library
* [Node.js](https://nodejs.org/) – Backend runtime
* [Express.js](https://expressjs.com/) – REST API framework
* [MongoDB](https://www.mongodb.com/) – Database for NGOs, users, and donations
* [Mongoose](https://mongoosejs.com/) – MongoDB ODM
* [Tailwind CSS](https://tailwindcss.com/) – Modern CSS framework
* [Socket.io](https://socket.io/) *(optional)* – For real-time event updates

---

## 📸 Screenshots

|                                   Home Page                                   |                                 NGO Dashboard                                 |                                  Events Page                                  |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| <img width="450" src="https://github.com/user-attachments/assets/example1" /> | <img width="450" src="https://github.com/user-attachments/assets/example2" /> | <img width="450" src="https://github.com/user-attachments/assets/example3" /> |

|                                 Donation Page                                 |                                 Volunteer Page                                |                               Collaboration Page                              |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| <img width="450" src="https://github.com/user-attachments/assets/example4" /> | <img width="450" src="https://github.com/user-attachments/assets/example5" /> | <img width="450" src="https://github.com/user-attachments/assets/example6" /> |

> *(Replace example image links with your uploaded GitHub screenshot URLs)*

---

## 🧠 Key Learnings

* Built a **real-world scalable MERN app** integrating NGOs, volunteers, and donation systems.
* Learned **how to manage multi-user roles** (NGO vs Volunteer).
* Implemented **event-based collaboration and donation tracking**.
* Enhanced understanding of **REST APIs, JWT Auth, and React state management**.
* Designed a **social impact workflow** to respond faster during crises.

---

> **Made with ❤️ by Saikumar Hanumanthu**

---

Would you like me to include a short **“System Architecture Diagram”** (showing NGO ↔ Volunteer ↔ MongoDB ↔ Server ↔ Frontend flow) in Markdown or image format for this README? It’ll make it visually impressive and interview-ready.
