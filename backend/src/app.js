const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./api/auth/auth.routes');
const otpRoutes = require('./api/otp/otp.routes');
const userRoutes = require('./api/users/user.routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
