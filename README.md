# **🔒 SecureOTP**

![🚀 Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo=semantic-release)  ![📜 License](https://img.shields.io/badge/License-Apache-green?style=for-the-badge&logo=bookstack)  ![🐍 Python](https://img.shields.io/badge/Python-3.8%2B-yellow?style=for-the-badge&logo=python&logoColor=white)  ![🟢 Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=for-the-badge&logo=nodedotjs&logoColor=white)  ![☕ Java](https://img.shields.io/badge/Java-11%2B-red?style=for-the-badge&logo=openjdk&logoColor=white) ![⚡ Express.js](https://img.shields.io/badge/Express.js-Fast%20&%20Minimalistic-lightgrey?style=for-the-badge&logo=express)  
![🍃 MongoDB](https://img.shields.io/badge/MongoDB-NoSQL%20Database-green?style=for-the-badge&logo=mongodb&logoColor=white)  
![🔑 JWT](https://img.shields.io/badge/JWT-Secure%20Auth-blue?style=for-the-badge&logo=jsonwebtokens&logoColor=white)  
![📧 Nodemailer](https://img.shields.io/badge/Nodemailer-Email%20Service-yellow?style=for-the-badge&logo=maildotru&logoColor=white)  
![📱 Twilio](https://img.shields.io/badge/Twilio-Cloud%20Communications-red?style=for-the-badge&logo=twilio&logoColor=white)  ![🐳 Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker&logoColor=white)
![🔧 Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white)

A professional and scalable OTP authentication system built with Node.js, Express, MongoDB, and Next.js. Supports email-based OTP verification, secure JWT authentication, and easy deployment with Docker. 🚀


---

## **📜 Features**

🔐 Secure OTP Generation & Verification – Protect your application with time-limited OTPs.

📧 Email Integration – OTPs sent via email with customizable templates.

🌐 Modern UI with Next.js – Clean and responsive user interface.

🛡️ JWT Authentication – Token-based security for session management.

📦 Docker-Ready – Seamless containerization and deployment.

🚀 Scalable Backend – Built with Express and MongoDB.

📊 Admin Dashboard – Monitor users and track OTP activity.

🛠️ CI/CD Support – Automated deployment workflows.

📱 Mobile-Friendly – Fully responsive design.


---

## **🚀 Installation**

### 1. **Clone the Repository**
```bash
git clone https://github.com/SMTNDev/SecureOTP.git
cd SecureOTP
```

### 2. **Setup Environment Variables**

Create a .env file in the backend folder and add:
```bash
NODE_ENV=production
DB_URI=mongodb://mongo:27017/otpDB
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 3. **Docker Setup**

Build and Run the Containers:
```bash
docker-compose up --build
```

### 4. **Access the Application**

Frontend: ```http://localhost:3000```

Backend API: ```http://localhost:5000/api```

MongoDB: ```localhost:27017```



---

## **🧪 API Endpoints**

User Registration - `/api/users/register`

Method: `POST`
Request Body:

```bash
{
  "email": "example@gmail.com",
  "password": "password123"
}
```

Response:

```bash
{
  "message": "User registered successfully!"
}
```

Send OTP - `/api/otp/send`

Method: `POST`
Request Body:

```bash
{
  "email": "example@gmail.com"
}
```

Response:

```sh
{
  "message": "OTP sent successfully!"
}
```

Verify OTP - `/api/otp/verify`

Method: `POST`
Request Body:

```bash
{
  "email": "example@gmail.com",
  "otp": "123456"
}
```

Response:

```sh
{
  "message": "OTP verified successfully!"
}
```


---

## **⚙️ Built With**

Backend: Node.js, Express.js, MongoDB

Frontend: Next.js, React.js

Authentication: JWT, Bcrypt

Email Integration: Nodemailer

Deployment: Docker & Docker Compose

Version Control: Git & GitHub



---

## **💡 Features Coming Soon**

📱 SMS OTP Support – OTP via SMS using [Twilio](https://www.twilio.com/en-us).

📊 Admin Panel – Advanced admin controls and logs.

📌 [Kubernetes Support](https://kubernetes.io/) – Auto-scaling and multi-container deployment.

🌍 Multi-Language Support – Localization for global users.



---

## **🤝 Contribution Guide**

We welcome contributions to improve this project! 🙌

1. Fork the Repository.


2. Create a New Branch.


3. Commit Your Changes.


4. Push and Open a Pull Request.



For major changes, please open an issue first to discuss proposed updates.


---

## **📧 Contact & Support**

[![Email](https://img.shields.io/badge/Email-smtndevworks@gmail.com-black?style=for-the-badge&logo=gmail)](mailto:smtndevworks@gmail.com)

[![🐛 Report Issue](https://img.shields.io/badge/Report%20Issue-Open%20an%20Issue-red?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SMTNDev/SecureOTP/issues)



---

## **☕ Support the Project**

If you find this project useful, consider supporting me by buying a coffee! 🙏
<a href="https://www.buymeacoffee.com/SMTNDev"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" width="180" alt="SMTNDev"/></a><br><br>


---

## **📝 License**

This project is licensed under the [Apache-2.0](https://github.com/SMTNDev/SecureOTP/tree/main?tab=Apache-2.0-1-ov-file) License - see the [LICENSE]() file for details.


---

## **🌟 Acknowledgments**

Open Source Libraries – Thanks to all the amazing libraries and tools used in this project.

Contributors – Thank you for improving the project!



---

## **🎉 Thank You!**

We hope [SecureOTP](https://github.com/SMTNDev/SecureOTP) secures your applications efficiently. Don't forget to ⭐ star this repository and share it with others! 🌟
