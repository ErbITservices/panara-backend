# 🛍️ Panara Backend

**Panara Backend** is a Node.js and Express-based RESTful API developed to serve as the backend for the Panara platform. This project utilizes MongoDB for data storage and follows modern web development practices to deliver a robust and scalable backend solution.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**: Secure login and role-based access control.
- 🛒 **Product Management**: CRUD operations for products.
- 📦 **Order Management**: Handle customer orders efficiently.
- 👥 **User Management**: Manage user profiles and permissions.
- 📧 **Email Notifications**: Send transactional emails to users.
- 📊 **Analytics**: Basic analytics for admin dashboard.
- 🌐 **Environment Configuration**: Utilizes `.env` files for environment-specific settings.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **Nodemailer**: For sending emails.
- **dotenv**: Loads environment variables from `.env` file.

---

## 📁 Project Structure

panara-backend/

├── helpers/ # Helper functions

├── html/ # Email templates

├── models/ # Mongoose models

├── routes/ # API routes

├── utils/ # Utility functions

├── .env # Environment variables

├── Dockerfile # Docker configuration

├── README.md # Project documentation

├── db.js # Database connection

├── index.js # Entry point

├── package-lock.json # Dependency lock file

├── package.json # Project metadata and scripts

└── vercel.json # Vercel deployment configuration


---

## 📦 Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/ErbITservices/panara-backend.git
   cd panara-backend
```

2. **Install dependencies:**

```bash
   npm install
```
3. **Configure environment variables:**

```env
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  EMAIL_USER=your_email@example.com
  EMAIL_PASS=your_email_password
```
4. **Start the development server:**

```bash
   npm run dev
```
5. **Open your browser and visit:**

```bash
   http://localhost:3000/
```
## 👥 Contributors
 - JAIMINPRAJAPATI
 - PATELMIHIR2715


## 🤝 Contributing
 We welcome contributions! Please open issues or pull requests to help improve this project.



