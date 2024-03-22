// tests/generateText.test.js
const request = require('supertest');
const app = require('../server');

describe('Generate Text API', () => {
    it('should generate text based on prompt', async () => {
        const prompt = 'Once upon a time';
        const res = await request(app)
            .post('/generate-text')
            .send({ prompt: prompt });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();

    }, 100000); 
});

