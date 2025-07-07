const request = require('supertest');
const app = require('../src/app');
describe('GET /api/estate', () => {
  it('debería retornar una lista de inmuebles', async () => {
    const res = await request(app).get('/api/estate');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('address');
    expect(res.body[0]).toHaveProperty('price');
  });
});