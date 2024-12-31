# **📘 API Documentation - SecureOTP**  

This documentation provides detailed information about the **OTP Vault API** endpoints. It explains request formats, response structures, and error handling.  

---

## **🛠 Base URL**  

- **Local Development:** `http://localhost:5000/api`  
- **Production:** Replace with your deployed URL.  

---

## **🔑 Authentication**  

Most endpoints require **Bearer Token Authentication** using **JWT tokens**. Include the following header:  

```
Authorization: Bearer <your-jwt-token>
```

---

## **📄 Endpoints**  

---

### **1. User Registration**  

**URL:** `/users/register`  
**Method:** `POST`  
**Description:** Creates a new user account.  

**Request Body:**  
```json
{
  "email": "example@gmail.com",
  "password": "password123"
}
```

**Success Response:**  
```json
{
  "message": "User registered successfully!"
}
```

**Error Responses:**  
- `400 Bad Request`: Invalid input data.  
- `409 Conflict`: Email already registered.  

---

### **2. User Login**  

**URL:** `/users/login`  
**Method:** `POST`  
**Description:** Logs in the user and returns a **JWT token**.  

**Request Body:**  
```json
{
  "email": "example@gmail.com",
  "password": "password123"
}
```

**Success Response:**  
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

**Error Responses:**  
- `400 Bad Request`: Missing email or password.  
- `401 Unauthorized`: Invalid credentials.  

---

### **3. Send OTP**  

**URL:** `/otp/send`  
**Method:** `POST`  
**Description:** Sends a 6-digit OTP to the specified email address.  

**Request Body:**  
```json
{
  "email": "example@gmail.com"
}
```

**Success Response:**  
```json
{
  "message": "OTP sent successfully!"
}
```

**Error Responses:**  
- `400 Bad Request`: Email field missing or invalid.  
- `500 Internal Server Error`: Failed to send OTP.  

---

### **4. Verify OTP**  

**URL:** `/otp/verify`  
**Method:** `POST`  
**Description:** Verifies the entered OTP for the email address.  

**Request Body:**  
```json
{
  "email": "example@gmail.com",
  "otp": "123456"
}
```

**Success Response:**  
```json
{
  "message": "OTP verified successfully!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

**Error Responses:**  
- `400 Bad Request`: Missing fields or invalid data.  
- `401 Unauthorized`: OTP expired or incorrect.  

---

### **5. Resend OTP**  

**URL:** `/otp/resend`  
**Method:** `POST`  
**Description:** Resends a new OTP to the email address.  

**Request Body:**  
```json
{
  "email": "example@gmail.com"
}
```

**Success Response:**  
```json
{
  "message": "New OTP sent successfully!"
}
```

**Error Responses:**  
- `400 Bad Request`: Invalid email.  
- `429 Too Many Requests`: Too many requests.  

---

### **6. Password Reset (Send Email)**  

**URL:** `/users/reset-password`  
**Method:** `POST`  
**Description:** Sends a password reset link via email.  

**Request Body:**  
```json
{
  "email": "example@gmail.com"
}
```

**Success Response:**  
```json
{
  "message": "Password reset email sent!"
}
```

**Error Responses:**  
- `400 Bad Request`: Invalid email format.  
- `404 Not Found`: Email not registered.  

---

### **7. Password Reset (Update Password)**  

**URL:** `/users/update-password`  
**Method:** `POST`  
**Description:** Updates the password using the reset token.  

**Request Body:**  
```json
{
  "token": "reset-token",
  "password": "newpassword123"
}
```

**Success Response:**  
```json
{
  "message": "Password updated successfully!"
}
```

**Error Responses:**  
- `400 Bad Request`: Missing or invalid token.  
- `401 Unauthorized`: Token expired.  

---

## **📊 Status Codes**  

| Status Code | Meaning                                   |
|-------------|-------------------------------------------|
| `200 OK`    | Request was successful.                   |
| `201 Created` | Resource created successfully.          |
| `400 Bad Request` | Invalid request data.               |
| `401 Unauthorized` | Missing or invalid authentication. |
| `403 Forbidden` | Access denied.                        |
| `404 Not Found` | Resource not found.                   |
| `409 Conflict` | Resource already exists.               |
| `500 Internal Server Error` | Server-side issue.        |

---

## **⚙️ Error Handling**  

### **Standard Error Response:**  
```json
{
  "error": "Validation Error",
  "details": "Email is required."
}
```

---

## **🧪 Testing with Postman**  

1. Download the **Postman Collection** file from the project root: **`postman-collection.json`**.  
2. Import the file into Postman.  
3. Set the **Base URL** in Postman’s environment settings.  
4. Test endpoints with the required headers and body parameters.  

---

## **📧 Support**  

For any issues or questions, feel free to:  
- **Raise a GitHub Issue:** [Report Issues](https://github.com/yourusername/otp-vault/issues)  
- **Contact Support:** support@otpvault.com  

---

## **☕ Support the Project**  

If you find this API useful, show your support by buying a coffee!  

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/SMTNDev)  

---

## **📑 License**  

This project is licensed under the **Apache-2.0 License** - See the [LICENSE](LICENSE) file for details.  

---

### **🎉 Thank You for Using SecureOTP!**  

Let me know if you'd like additional features or enhancements in the documentation!
