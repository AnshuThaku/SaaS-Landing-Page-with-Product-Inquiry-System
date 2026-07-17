# CRM – Modern SaaS Landing Page & Inquiry Management System

A modern full-stack CRM web application built using **React, Tailwind CSS, Node.js, Express.js, and MongoDB Atlas**.

The application enables businesses to collect customer inquiries through a responsive landing page and manage them efficiently through an intuitive admin dashboard.

---

# 🌐 Live Demo

### Frontend
https://saa-s-landing-page-with-product-inq.vercel.app/
### Backend API
 https://saas-landing-page-with-product-inquiry.onrender.com

---

# 📂 GitHub Repository

https://github.com/your-username/your-repository

---

# 📖 Project Overview

This project was developed as part of a Full Stack Developer internship assessment.

The application consists of two major modules:

- **Landing Page**
  - Modern SaaS-inspired UI
  - Fully responsive
  - Product showcase
  - Contact/Inquiry form

- **Admin Dashboard**
  - View customer inquiries
  - Search inquiries
  - Filter inquiries
  - Delete inquiries
  - Dashboard statistics

The application follows a clean and scalable architecture with separate frontend and backend projects.

---

# ✨ Features

## Landing Page

- Responsive Navigation
- Hero Section
- Features Section
- Pricing Section
- Testimonials
- FAQ
- Contact Form
- Responsive Footer

---

## Inquiry Form

- React Hook Form
- Zod Validation
- Axios API Integration
- Toast Notifications
- Loading State
- Client-side Validation
- Server-side Validation

---

## Admin Dashboard

- Dashboard Overview
- Inquiry Management
- Responsive Layout
- Search Functionality
- Filter Support
- Delete Inquiry
- Empty State
- Loading State

---

# 🛠 Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- Zod
- React Hot Toast
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

---

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📁 Folder Structure

```text
project-root
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── constants
│   │   ├── layouts
│   │   ├── pages
│   │   ├── schemas
│   │   ├── services
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   ├── validators
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Project Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

---

## 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## 3. Setup Backend

```bash
cd backend
npm install
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

# 🔐 Environment Variables

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:5173
```

---

# 🏗 Project Architecture

The application follows a **Client–Server Architecture**.

```
React Frontend
        │
        ▼
Axios Service Layer
        │
        ▼
Express REST API
        │
        ▼
Controllers
        │
        ▼
Mongoose Models
        │
        ▼
MongoDB Atlas
```

The backend follows the **MVC (Model–View–Controller)** design pattern.

- **Routes** receive incoming HTTP requests.
- **Controllers** contain business logic.
- **Models** define MongoDB schemas.
- **Middleware** handles validation and errors.
- **Database** stores customer inquiries.

---

# 📡 API Documentation

## Create Inquiry

**POST**

```
/api/inquiry
```

### Request Body

```json
{
  "fullName": "John Doe",
  "companyName": "ABC Pvt Ltd",
  "email": "john@example.com",
  "phone": "9876543210",
  "country": "India",
  "industry": "Software",
  "companySize": "11-50",
  "message": "Need CRM solution."
}
```

### Success Response

```json
{
  "success": true,
  "message": "Inquiry created successfully."
}
```

---

## Get All Inquiries

**GET**

```
/api/inquiry
```

Returns all inquiries sorted by newest first.

---

## Get Inquiry By ID

**GET**

```
/api/inquiry/:id
```

Returns a single inquiry.

---

## Delete Inquiry

**DELETE**

```
/api/inquiry/:id
```

Deletes an inquiry by its ID.

---

# ✅ Validation

### Frontend

- React Hook Form
- Zod Validation

### Backend

- Express Validation Middleware
- Mongoose Schema Validation

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

# 🚀 Deployment

### Frontend

Deployed on **Vercel**

### Backend

Deployed on **Render**

### Database

Hosted on **MongoDB Atlas**

---

# 🔮 Future Enhancements

- User Authentication
- Role-Based Access Control
- Dashboard Analytics
- Export Data (CSV/PDF)
- Pagination
- Dark Mode
- Docker Support
- Unit Testing

---

# 👨‍💻 Author

**Anshu Thakur**

GitHub: https://github.com/anshuthaku


---

# 📄 License

This project was developed as part of a Full Stack Developer internship assessment and is intended for educational and evaluation purposes.