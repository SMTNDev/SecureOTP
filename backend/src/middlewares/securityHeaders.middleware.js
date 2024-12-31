const helmet = require('helmet');

const securityHeaders = helmet({
    contentSecurityPolicy: false,
});

module.exports = securityHeaders;
