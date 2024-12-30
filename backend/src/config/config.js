require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    dbURI: process.env.DB_URI,
    jwtSecret: process.env.JWT_SECRET,
    otpExpiry: process.env.OTP_EXPIRY || 5,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    twilioSid: process.env.TWILIO_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
    twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
};
