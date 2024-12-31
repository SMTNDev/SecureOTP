const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
    const log = `${req.method} ${req.url} - ${req.ip}`;
    logger.logMessage(log);
    next();
};

module.exports = requestLogger;
