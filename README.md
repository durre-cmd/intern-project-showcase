
<<<<<<< HEAD
=======
# **Intern Project Showcase Platform**

A platform where interns can professionally showcase their projects, including images and project files, and view other interns’ work. Built with **React, Node.js, Express, MongoDB**, and JWT authentication.

---

## **Table of Contents**

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Folder Structure](#folder-structure)
* [API Endpoints](#api-endpoints)
* [Screenshots](#screenshots)
* [License](#license)

---

## **Features**

* User registration and login with JWT authentication.
* Secure password hashing with bcrypt.
* Upload projects with:

  * Images
  * Optional additional files (PDFs, ZIPs)
  * Description and tags
* View all uploaded projects in cards with:

  * Project title and description
  * Tags
  * Uploaded image or file
  * Name of the intern who uploaded the project
* Responsive, clean frontend design.
* Shareable project showcase links.
* Logout functionality.

---

## **Technologies Used**

**Frontend:**

* React.js
* Axios
* CSS

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (file upload)
* bcryptjs (password hashing)
* jsonwebtoken (JWT)
* dotenv (environment variables)
* CORS

---

## **Installation**

### **Backend Setup**

1. Clone the repository:

```bash
git clone <your-repo-url>
cd intern-project-showcase/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

4. Create an `uploads/` folder to store uploaded files:

```bash
mkdir uploads
```

5. Start the backend server:

```bash
node server.js
```

---

### **Frontend Setup**

1. Open a new terminal and navigate to frontend:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm start
```

4. Open `http://localhost:3000` in your browser.

---

## **Usage**

1. Register a new account or login with an existing account.
2. Upload your project using the form:

   * Enter project title, description, tags.
   * Upload an image and optional files.
3. View all projects in cards with intern names, images, and files.
4. Logout when done.

---

## **Folder Structure**

```
intern-project-showcase/
│
├── backend/
│   ├── models/       # MongoDB models (User.js, Project.js)
│   ├── routes/       # Express routes (auth.js, projects.js)
│   ├── middleware/   # Auth middleware (auth.js)
│   ├── uploads/      # Uploaded files and images
│   ├── .env          # Environment variables
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Login.js, Register.js, ProjectForm.js, ProjectList.js
│   │   ├── styles/      # CSS files (Auth.css, App.css)
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

---

## **API Endpoints**

### **Auth Routes**

* **POST** `/api/auth/register` → Register a new user.
* **POST** `/api/auth/login` → Login and get JWT token.

### **Project Routes**

* **POST** `/api/projects` → Upload a new project (requires JWT).
* **GET** `/api/projects` → Get all projects.

---

## **License**

This project is open source and available under the **MIT License**.

>>>>>>> fafb11b103ee617ea5c2bc44bb1307744de80113
