const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const requiredEnvs = ['DB_URI', 'JWT_SECRET', 'EMAIL_USER', 'EMAIL_PASS'];

requiredEnvs.forEach((env) => {
    if (!process.env[env]) {
        console.error(`Missing environment variable: ${env}`);
        process.exit(1);
    }
});

console.log('Environment variables validated.');
