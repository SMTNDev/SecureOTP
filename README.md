# **🔒 SecureOTP**  

![🚀 Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo=semantic-release)  ![📜 License](https://img.shields.io/badge/License-Apache-green?style=for-the-badge&logo=bookstack)  ![🐍 Python](https://img.shields.io/badge/Python-3.8%2B-yellow?style=for-the-badge&logo=python&logoColor=white)  ![🟢 Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=for-the-badge&logo=nodedotjs&logoColor=white)  ![☕ Java](https://img.shields.io/badge/Java-11%2B-red?style=for-the-badge&logo=openjdk&logoColor=white) ![🔑 JWT](https://img.shields.io/badge/JWT-Secure%20Auth-blue?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![⚡ Express.js](https://img.shields.io/badge/Express.js-Fast%20&%20Minimalistic-lightgrey?style=for-the-badge&logo=express)  
![🍃 MongoDB](https://img.shields.io/badge/MongoDB-NoSQL%20Database-green?style=for-the-badge&logo=mongodb&logoColor=white)  ![📧 Nodemailer](https://img.shields.io/badge/Nodemailer-Email%20Service-yellow?style=for-the-badge&logo=maildotru&logoColor=white)  
![📱 Twilio](https://img.shields.io/badge/Twilio-Cloud%20Communications-red?style=for-the-badge&logo=twilio&logoColor=white)  ![🐳 Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker&logoColor=white)
![🔧 Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white)

![Isekai anime style illustration depicting warm candlelight illuminating a scene with expressive compositio nd a warm glow   The image features a sleek and modern logo for SecureOTP an orange and white shield with a digital keyhol](https://github.com/user-attachments/assets/76f812a1-9547-4345-aa6d-fd69a0c3ae7d)

**SecureOTP** is a secure and scalable **OTP (One-Time Password) Generation and Verification System** built with **Node.js**, **Express.js**, **MongoDB**, and **Next.js**. It ensures fast, reliable, and secure authentication using **email-based OTP verification**.  

---

## **📜 Table of Contents**  
- [🚀 Features](#-features)  
- [🛠️ Tech Stack](#️-tech-stack)  
- [📦 Folder Structure](#-folder-structure)  
- [⚙️ Installation](#️-installation)  
- [🐳 Docker Setup](#-docker-setup)  
- [☁️ Cloud Deployment](#️-cloud-deployment)  
- [📄 API Documentation](#-api-documentation)  
- [📊 Architecture Overview](#-architecture-overview)  
- [📈 CI/CD Pipeline](#-cicd-pipeline)  
- [🛡️ Security Features](#️-security-features)  
- [🔧 Configuration](#-configuration)  
- [📑 License](#-license)  
- [☕ Support](#-support)  

---

## **🚀 Features**  

- **🔑 OTP-Based Authentication** - Secure OTP generation and verification for user authentication.  
- **📧 Email Integration** - OTP delivery via email using SMTP.  
- **📊 Scalable Architecture** - Built for scalability using **Docker** and **Kubernetes**.  
- **🧑‍💻 Role-Based Access Control (RBAC)** - User roles and permissions management.  
- **🔐 Security Enhancements** - JWT-based tokens, bcrypt hashing, and HTTPS support.  
- **📡 API-First Design** - RESTful APIs for seamless integration with frontend and mobile apps.  
- **📱 Responsive UI** - Modern, user-friendly, and responsive UI built with **Next.js**.  

---

## **🛠️ Tech Stack**  

| Component           | Technology              |
|---------------------|-------------------------|
| **Frontend**        | Next.js, React.js       |
| **Backend**         | Node.js, Express.js     |
| **Database**        | MongoDB                 |
| **Authentication**  | JWT, Bcrypt.js          |
| **Email Service**   | Nodemailer, SMTP        |
| **Deployment**      | Docker, Kubernetes      |
| **Reverse Proxy**   | NGINX                   |
| **CI/CD**           | GitHub Actions          |

---

## **📦 Install Dependencies**:

```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken nodemailer express-validator express-rate-limit cors body-parser supertest jest
```
```bash
npm install axios react-toastify dotenv
```

---

## **⚙️ Installation**  

### **1. Clone Repository**  
```bash
git clone https://github.com/SMTNDev/SecureOTP.git
cd SecureOTP
```

### **2. Install Dependencies**  
```bash
cd backend && npm install
cd ../frontend && npm install
```

### **3. Configure Environment Variables**  
Create a `.env` file in the **backend** folder. See [Configuration](#-configuration).  

### **4. Run Locally**  
```bash
# Start Backend
cd backend
npm start

# Start Frontend
cd frontend
npm run dev
```

### **5. Access Application**  
- Frontend: `http://localhost:3000`  
- Backend API: `http://localhost:5000/api`  

---

## **🐳 Docker Setup**  

### **1. Build and Run Containers**  
```bash
docker-compose build
docker-compose up -d
```

### **2. Stop Services**  
```bash
docker-compose down
```

---

## **☁️ Cloud Deployment**  

### **1. Kubernetes Setup**  
```bash
minikube start
kubectl apply -f k8s/
```

### **2. Access Application**  
```bash
minikube service frontend-service
```

For more details, see the [Deployment Guide](Deployment.md).  

---

## **📄 API Documentation**  

- Full API details are available in the [API-Docs.md](API-Docs.md) file.  
- Test endpoints with **Postman** or **curl** commands.  

---

## **📊 Architecture Overview**  

- Learn more about the internal system design in the [Architecture.md](Architecture.md) file.  

---

## **📈 CI/CD Pipeline**  

- **Automated Builds & Tests** - Using **GitHub Actions** for CI/CD.  
- **Docker Image Deployment** - Pushes images to Docker Hub for production use.  

See `.github/workflows/main.yml` for details.  

---

## **🛡️ Security Features**  

- **JWT Tokens** - Secure authentication.  
- **Password Hashing** - Uses **bcrypt** for encryption.  
- **Rate Limiting** - Prevents brute force attacks.  
- **HTTPS Ready** - Supports SSL via NGINX configuration.  
- **Input Validation** - Prevents SQL and NoSQL injection.  

---

## **🔧 Configuration**  

Create a `.env` file in the backend folder with these keys:  

```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/SecureOTP
JWT_SECRET=your_jwt_secret_key
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=username
SMTP_PASS=password
```

---

## **📑 License**  

This project is licensed under the **Apache-2.0 License**. See the [LICENSE](LICENSE) file for more details.  

---

## **☕ Support**  

If you find this project helpful, consider **supporting me** by buying a coffee!  

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/SMTNDev)  

---

### **🎉 Thank You for Using SecureOTP!**  

Let me know if you need any updates, features, or enhancements!
