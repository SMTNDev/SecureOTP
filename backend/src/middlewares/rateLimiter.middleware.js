const rateLimit = require('express-rate-limit');

const otpRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 OTP requests
    message: 'Too many OTP requests. Please try again later.',
});

module.exports = otpRateLimiter;
