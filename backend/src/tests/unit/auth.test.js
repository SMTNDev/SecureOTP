const request = require('supertest');
const app = require('../src/app');

describe('Auth API Tests', () => {
    it('should register a user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message');
    });

    it('should fail with invalid email', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({ email: 'invalid-email', password: 'password123' });

        expect(res.statusCode).toBe(400);
    });
});
