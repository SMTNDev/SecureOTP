# SecureOTP
![🚀 Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo=semantic-release)  ![📜 License](https://img.shields.io/badge/License-Apache-green?style=for-the-badge&logo=bookstack)  ![🐍 Python](https://img.shields.io/badge/Python-3.8%2B-yellow?style=for-the-badge&logo=python&logoColor=white)  ![🟢 Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=for-the-badge&logo=nodedotjs&logoColor=white)  ![☕ Java](https://img.shields.io/badge/Java-11%2B-red?style=for-the-badge&logo=openjdk&logoColor=white)
 ![🐳 Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker&logoColor=white)
![🔧 Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white)

This procedure of OTP generation is proved to be very secure and is used in many applications such as online banking, etc. It provides multi-channel delivery by SMS, email, and push notifications for quick and reliable authentication. Ideal for safeguarding user accounts, transactions, and sensitive information.

## **Features**

- **OTP Generation**: Generates secure one-time passwords for user authentication.
- **OTP Validation**: Verifies the entered OTP against the generated one.
- **Email Integration**: Sends OTP via email to the user.
- **Backend API**: Fully RESTful API built with **Node.js**, supporting secure authentication.
- **Frontend Interface**: A user-friendly frontend built with **Next.js** for OTP input and verification.
- **MongoDB Integration**: Stores OTP and user-related data securely in MongoDB.
- **Scalable & Secure**: Built for scalability, security, and performance.

---

## **Technologies Used**

- **Frontend**:  
  - **Next.js** (React-based framework for SSR/SSG)
  - **React**
  - **CSS** (TailwindCSS for styling)

- **Backend**:  
  - **Node.js**
  - **Express.js**  
  - **JWT** (JSON Web Tokens for authentication)
  - **Nodemailer** (For email delivery)
  - **MongoDB** (For data storage)

- **DevOps**:  
  - **Docker** (For containerization)
  - **Kubernetes** (For orchestration – optional)
  - **NGINX** (Reverse proxy – optional)

---

## **Installation Guide**

### **1. Prerequisites**

- **Node.js** (>=18.x.x)  
- **MongoDB** (Local/Cloud)  
- **Docker** (Optional, for containerization)  
- **NPM/Yarn** (Package managers)

### **2. Clone the Repository**

Clone the project to your local machine:

```bash
git clone https://github.com/SMTNDev/SecureOTP.git
```
```bash
cd SecureOTP
```

### **3. Setup Backend**

### Step 1: Install Backend Dependencies

Navigate to the backend directory and install dependencies:
  ```bash
  cd backend
  ```
  ```bash
  npm install
  ```

### Step 2: Configure Environment Variables

Create a `.env` file in the backend directory with the following environment variables:
```bash
NODE_ENV=development
DB_URI=mongodb://localhost:27017/otpDB
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Step 3: Run Backend

Start the backend server:
```bash
npm run dev
```

The backend will be accessible at ``http://localhost:5000``.

### **4. Setup Frontend**

### Step 1: Install Frontend Dependencies

Navigate to the frontend directory and install dependencies:
```bash
cd frontend
```
```bash
npm install
```
### Step 2: Configure Environment Variables

Create a `.env.local` file in the frontend directory:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

### Step 3: Run Frontend

Start the frontend server:
```sh
npm run dev
```
The frontend will be accessible at ``http://localhost:3000``.


---

## **Docker Setup** (Optional)

If you prefer to run the project with Docker, follow the instructions below.

## 1. Build and Run Containers

### Step 1: Build Docker Images

Build the backend and frontend Docker images:
```bash
docker-compose build
```
### Step 2: Run Docker Containers

Start the containers:
```bash
docker-compose up
```
Your application will be accessible at:

Backend: `http://localhost:5000`

Frontend: `http://localhost:3000`

MongoDB: `mongodb://localhost:27017`


## 2. Docker-Compose File

Make sure your project includes the ``docker-compose.yml`` file:
```bash
version: '3.8'

services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: otp-backend
    ports:
      - '5000:5000'
    environment:
      - NODE_ENV=production
      - DB_URI=mongodb://mongo:27017/otpDB
      - JWT_SECRET=your_jwt_secret_key
      - EMAIL_USER=your_email@example.com
      - EMAIL_PASS=your_email_password
    depends_on:
      - mongo

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: otp-frontend
    ports:
      - '3000:3000'
    depends_on:
      - backend

  mongo:
    image: mongo:latest
    container_name: otp-mongo
    ports:
      - '27017:27017'
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

---

Project Structure

```
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── public
│   ├── styles
│   ├── .env.local
│   ├── next.config.js
│   └── Dockerfile
├── docker-compose.yml
├── .gitignore
├── README.md
└── package.json
```

---

## API Endpoints

### 1. `/api/auth/register`

Method: POST
Registers a new user and sends an OTP via email.
```
Request Body:

{
  "email": "user@example.com"
}
```
### 2. `/api/auth/verify`
```
Method: POST
Verifies the OTP entered by the user.

Request Body:

{
  "email": "user@example.com",
  "otp": "123456"
}
```

---

## **Contributing**

We welcome contributions to improve the OTP Verification & Generation System! If you'd like to contribute:

1. Fork the repository and clone it to your local machine.


2. Create a feature branch (git checkout -b feature-name).


3. Make changes and commit them (git commit -m 'Add feature').


4. Push to the feature branch (git push origin feature-name).


5. Create a pull request describing your changes.




---

## **License**

This project is licensed under the [Apache-2.0](https://github.com/SMTNDev/SecureOTP/tree/main#) License.


---

## **Contact**

If you have any questions or suggestions, feel free to contact us at [your-email@example.com].


---

Acknowledgments

**Node.js**: The backend framework for building scalable web applications.

**MongoDB**: The database used for storing OTP and user information.

**Next.js**: The React framework powering the frontend.

**Docker**: Used to containerize the application for easy deployment.

**JWT**: Provides secure token-based authentication for the app.



---

### **_Happy Coding!_**

---

### **Key Sections Explained:**

1. **[Project Overview](Project-Overview)**: A brief description of the application, its functionality, and tech stack.
2. **[Technologies Used](Technologies-Used)**: List of the main technologies employed in the project (Backend, Frontend, DevOps).
3. **[Installation Guide](Installation-Guide)**: Instructions on setting up the project locally (for both backend and frontend).
4. **[Docker Setup](Docker-Setup)**: Optional but detailed setup for running the project in Docker containers.
5. **[Project Structure](#project-structure)**: A clear view of the project structure so developers know where to find files.
6. **[API Endpoints](API-Endpoints)**: Documentation of key API routes.
7. **[Contributing](Contributing)**: Encouragement for developers to contribute and explain the process.
8. **[License & Contact](License-&-Contact)**: Information about project licensing and how to get in touch.
