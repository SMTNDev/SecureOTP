# **🚀 Deployment Guide - SecureOTP**  

This guide provides step-by-step instructions to deploy the **SecureOTP** application in **development**, **production**, and **cloud environments** using **Docker**, **Kubernetes**, and **NGINX reverse proxy**.  

---

## **🛠️ Prerequisites**  

### **1. System Requirements**  
- **Node.js**: v18 or later  
- **NPM/Yarn**: Latest version  
- **Docker**: v20.10+  
- **Docker Compose**: v2.0+  
- **Kubernetes (kubectl + Minikube)**: For Kubernetes deployment  
- **NGINX**: v1.18+ (for reverse proxy)  
- **Git**: Latest version  

### **2. Environment Variables**  

Create a `.env` file in the **backend** directory:  

```plaintext
# Server Config
PORT=5000
NODE_ENV=production

# Database
MONGO_URI=mongodb://localhost:27017/SecureOTP

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=1h

# Email Service
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=username
SMTP_PASS=password

# OTP Settings
OTP_LENGTH=6
OTP_EXPIRY=300
```

---

## **📦 1. Local Development Setup**  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/SMTNDev/SecureOTP.git
   cd SecureOTP
   ```

2. **Install Dependencies**:  
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Run Backend Server**:  
   ```bash
   cd backend
   npm start
   ```

4. **Run Frontend Server**:  
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the Application**:  
   - Frontend: `http://localhost:3000`  
   - Backend: `http://localhost:5000/api`  

---

## **🐳 2. Docker Deployment**  

### **1. Build Docker Images**  
```bash
docker-compose build
```

### **2. Start Containers**  
```bash
docker-compose up -d
```

### **3. Verify Running Services**  
```bash
docker ps
```

### **4. Stop Services**  
```bash
docker-compose down
```

---

## **☁️ 3. Kubernetes Deployment**  

### **1. Setup Kubernetes Cluster**  
```bash
minikube start
kubectl apply -f k8s/
```

### **2. Deploy Application**  
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### **3. Verify Pods and Services**  
```bash
kubectl get pods
kubectl get services
```

### **4. Access Application**  
```bash
minikube service frontend-service
```

---

## **🌐 4. NGINX Reverse Proxy (Production)**  

### **1. Install NGINX**  
```bash
sudo apt update
sudo apt install nginx
```

### **2. Configure NGINX**  

Create a new NGINX configuration file:  
```bash
sudo nano /etc/nginx/sites-available/SecureOTP
```

Add the following content:  
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api/ {
        proxy_pass http://localhost:5000;
    }
}
```

### **3. Enable Configuration**  
```bash
sudo ln -s /etc/nginx/sites-available/SecureOTP /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### **4. Enable SSL (HTTPS)**  

Install Certbot for SSL certificates:  
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## **☁️ 5. Cloud Deployment**  

### **1. AWS EC2 (Ubuntu Server)**  
1. **Launch EC2 Instance**  
   - Choose Ubuntu Server 22.04 AMI.  
   - Open ports **80, 443, and 22**.  

2. **Install Docker and Node.js**  
```bash
sudo apt update
sudo apt install docker.io docker-compose nodejs npm
```

3. **Clone Repo and Deploy**  
```bash
git clone https://github.com/yourusername/SecureOTP.git
cd SecureOTP
docker-compose up -d
```

4. **Set up NGINX** (follow above steps).  

---

## **🧪 Testing the Deployment**  

- Test endpoints using **Postman** or **curl** commands.  
- Verify email services with a testing SMTP account (Mailtrap).  
- Ensure HTTPS redirection with NGINX and SSL.  

---

## **📈 CI/CD Pipeline (GitHub Actions)**  

### **1. Workflow File (`.github/workflows/main.yml`)**  

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: |
          cd backend && npm install
          cd ../frontend && npm install

      - name: Run Tests
        run: |
          cd backend && npm test
          cd ../frontend && npm run lint

      - name: Build Docker Images
        run: docker-compose build

      - name: Push Images to Docker Hub
        run: |
          echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin
          docker-compose push
```

---

## **📑 License**  

This project is licensed under the **Apache-2.0 License**. See the [LICENSE](LICENSE) file for more details.  

---

## **☕ Support the Project**  

Enjoy using SecureOTP? Show your support by buying a coffee!  

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/SMTNDev)  

---

### **🎉 Thank You for Deploying SecureOTP!**  

Let me know if you need any enhancements or cloud-specific instructions!
