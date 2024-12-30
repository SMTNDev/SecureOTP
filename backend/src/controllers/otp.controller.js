const User = require('../models/User.model');
const { generateOTP, verifyOTP } = require('../services/otp.service');

// Generate OTP
exports.sendOTP = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const otp = generateOTP();
        user.otp = otp;
        user.otpExpires = Date.now() + process.env.OTP_EXPIRY * 60 * 1000;
        await user.save();

        // Send OTP via email or SMS (dummy response here)
        console.log(`OTP sent to ${email}: ${otp}`);

        res.json({ message: 'OTP sent successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        user.otp = null; // Clear OTP after verification
        user.otpExpires = null;
        await user.save();

        res.json({ message: 'OTP verified successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
