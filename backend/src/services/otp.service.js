const speakeasy = require('speakeasy');
const crypto = require('crypto');

const generateOTP = () => {
    const otp = speakeasy.totp({
        secret: crypto.randomBytes(16).toString('hex'),
        encoding: 'hex',
        step: 30, // Valid for 30 seconds
        digits: 6, // 6-digit OTP
    });
    return otp;
};

const verifyOTP = (secret, token) => {
    return speakeasy.totp.verify({
        secret,
        encoding: 'hex',
        token,
        step: 30,
        window: 1,
    });
};

module.exports = { generateOTP, verifyOTP };
