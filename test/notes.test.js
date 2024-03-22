// tests/notes.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Note = require('../database/models/note');

beforeAll(async () => {
    await mongoose.connect('mongodb+srv://Hitec:4102EEwQODUEHJkZ@hitecdb.htrnbfc.mongodb.net/notes?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Notes API', () => {
    beforeEach(async () => {
        await Note.deleteMany({});
    });

    it('should create a new note', async () => {
        const res = await request(app)
            .post('/notes')
            .send({ title: 'Test Note', content: 'This is a test note' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toEqual('Test Note');
    });

 
});
 