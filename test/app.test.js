// test/app.test.js
const request = require('supertest');
const app = require('../app');  // Import the app for testing

describe('GET /', () => {
  it('should return status 200 with Hello, world!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
