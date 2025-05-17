# 🚀 KeepIt — Find it when you need it

**KeepIt** is a modern full-stack productivity app that helps developers and knowledge workers **save, organize, and retrieve** useful content — including links, tweets, notes, documents, videos, and more — all in one place.

🔗 Live Demo: [keepit-mauve.vercel.app](https://keepit-mauve.vercel.app/)

---

## 🧠 Why KeepIt?

In the age of endless tabs and scattered knowledge, it’s easy to lose track of valuable content. **KeepIt** solves this by acting as your **digital brain**, where you can save content into customizable collections called **Stashes** — searchable, taggable, and shareable.

---

## ✨ Features

- 🔐 **Secure JWT Auth**  
  Sign up and log in using JWT-based authentication with **HTTP-only cookies** and proper **CORS configuration**.

- 🎯 **Stash System**  
  Save items like:
  - 🔗 Links
  - 📝 Notes
  - 🐦 Tweets
  - 📄 Documents
  - 🎥 Videos  
  Each item supports:
  - Custom title, description/content
  - Type classification
  - Timestamps (created & updated)
  - Tagging

- 🧩 **Smooth & Reactive UI**
  - Built using **Recoil** for global state management
  - Enhanced with **Framer Motion** for seamless transitions
  - Responsive, polished layout using **TailwindCSS** and **Masonry grid**

- 🛠️ **Editable & Shareable**
  - Click on any item to **edit or delete** it
  - Users can **share their stash publicly**, making it a showcase of curated content

---

## 🧰 Tech Stack

### Frontend
- **React** + **TypeScript**
- **TailwindCSS** for styling
- **Recoil** for state management
- **Framer Motion** for animations
- **React Hot Toast** for notifications
- **React Masonry CSS** for grid layout

### Backend
- **Node.js**, **Express**
- **MongoDB** with **Mongoose**
- RESTful API with CRUD endpoints for auth and stash management

### Auth & Security
- **JWT** for authentication
- **HTTP-only cookies**
- **CORS** configured properly for frontend-backend communication

### Deployment
- **Frontend:** Vercel
- **Backend:** Railway

---

## 📸 Screenshots

> Home Page 
![2](https://github.com/user-attachments/assets/b7238833-9bd3-4104-82d2-b4cf19274d3c)

> Stash Page 
![1](https://github.com/user-attachments/assets/f770e635-8c6a-4f51-b412-40e349ed0855)

> Login Page
![3](https://github.com/user-attachments/assets/855f777a-c5a4-4e04-81a6-00bd8bc55d7a)

> Signup Page
![4](https://github.com/user-attachments/assets/e01aa5cd-5548-4b5d-889a-9441496b877f)

---

## 🛤️ Roadmap

- [x] Add JWT authentication with secure cookies  
- [x] Create stash system with support for all content types  
- [x] Implement item editing and deletion  
- [x] Responsive, animated UI  
- [ ] Add search and filtering by tag/content type  
- [ ] Public profile pages for users’ stashes  
- [ ] Browser extension to save links/tweets directly  
- [ ] Web extension to allow users to store items in stash remotely

---

## 🧪 Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Shivamvashist/KeepIt
cd keepit
```

### 2. Set up the frontend
```bash
cd client
npm install
npm run dev
```

### 3. Set up the backend
```bash
cd server
npm install
npm run dev
```

### 🔐 Make sure to set up a .env file in the server folder with:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```
