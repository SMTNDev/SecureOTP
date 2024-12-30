const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
module.exports = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next(); // Proceed to the next middleware or route
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
