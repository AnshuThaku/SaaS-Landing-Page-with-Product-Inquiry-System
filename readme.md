# CRM – Modern SaaS Landing Page & Inquiry Management System

A modern, responsive Customer Relationship Management (CRM) web application built with the MERN ecosystem. The application enables businesses to capture customer inquiries through a professional landing page and manage them efficiently through an intuitive admin dashboard.

The project demonstrates modern frontend development, RESTful API design, responsive UI implementation, and scalable backend architecture.

---

## Live Demo

**Frontend:**  
https://saa-s-landing-page-with-product-inq.vercel.app/
**Backend API:**  
 https://saas-landing-page-with-product-inquiry.onrender.com
---

## GitHub Repository

https://github.com/your-username/repository-name

---

# Features

## Landing Page

- Modern SaaS-inspired UI
- Fully responsive across all devices
- Professional hero section
- Feature showcase
- Pricing section
- Testimonials
- Frequently Asked Questions
- Contact section
- Smooth navigation

---

## Inquiry Management

- Customer inquiry form
- Client-side validation
- Server-side validation
- Real-time API integration
- Success & error notifications
- Loading states

---

## Admin Dashboard

- View all inquiries
- Delete inquiries
- Dashboard statistics
- Responsive layout
- Search functionality
- Filter support
- Empty states
- Loading skeletons

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- Zod
- React Icons
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Database

- MongoDB Atlas

## Deployment

- Vercel
- Render

---

# Project Structure

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

# Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/repository-name.git
```

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

Run the frontend:

```bash
npm run dev
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

Run the backend:

```bash
npm run dev
```

---

# Environment Variables

## Frontend

Create a `.env` file inside the frontend directory.

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Backend

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/inquiry` | Create a new inquiry |
| GET | `/api/inquiry` | Retrieve all inquiries |
| GET | `/api/inquiry/:id` | Retrieve a specific inquiry |
| DELETE | `/api/inquiry/:id` | Delete an inquiry |

---

# Validation

### Frontend

- React Hook Form
- Zod Schema Validation

### Backend

- Express Middleware Validation
- Mongoose Schema Validation

---

# Responsive Design

The application has been optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

# Performance & Architecture

- Modular folder structure
- Reusable React components
- RESTful API architecture
- Centralized error handling
- Clean code practices
- Responsive UI
- Component-based design
- Scalable backend architecture

---

# Future Enhancements

- Authentication & Authorization
- Role-Based Access Control
- Dark Mode
- Dashboard Analytics
- Pagination
- Export Data (CSV/PDF)
- Docker Support
- Unit Testing

---

# Author

**Anshu Thakur**

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-linkedin

---

# License

This project was developed as part of a Full Stack Developer internship assessment. It is intended for educational and evaluation purposes only.