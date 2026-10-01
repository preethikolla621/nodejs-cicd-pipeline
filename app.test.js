const test = require('node:test');
const assert = require('node:assert');
const app = require('./app');

test('home route returns 200', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/`);
  assert.strictEqual(res.status, 200);
  server.close();
});
