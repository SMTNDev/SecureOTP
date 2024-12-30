const { body, validationResult } = require('express-validator');

// Handle validation errors
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length) break;
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    };
};

// Rules for user registration
const validateRegistration = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

// Rules for OTP verification
const validateOTP = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('otp').isNumeric().withMessage('OTP must be numeric').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits'),
];

module.exports = { validate, validateRegistration, validateOTP };
