const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: String }, // Encrypted OTP
    otpExpires: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
