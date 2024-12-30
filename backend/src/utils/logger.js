const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../../logs/app.log');

const log = (level, message) => {
    const logMessage = `[${new Date().toISOString()}] [${level.toUpperCase()}]: ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
};

const info = (message) => log('info', message);
const error = (message) => log('error', message);
const warn = (message) => log('warn', message);

module.exports = { info, error, warn };
