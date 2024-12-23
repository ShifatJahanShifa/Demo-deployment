const request = require('supertest');
const app = require('./index'); // Import the app
const http = require('http');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(4000, done);
});

afterAll((done) => {
    server.close(done);
});

describe('GET /', () => {
    it('should return Hello World', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World');
    });
});