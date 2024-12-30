const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', require('./src/api/auth/auth.routes'));
app.use('/api/otp', require('./src/api/otp/otp.routes'));

// Default route
app.get('/', (req, res) => {
    res.send('SecureOTP API is Running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
