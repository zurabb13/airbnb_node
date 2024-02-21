import app from './app.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import http from 'http';
config({ path: './.env' });

mongoose
  .connect(process.env.MONGO)
  .then((client) => {
    console.log('detabase connecting are ready');
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end('hello world');
});
app.listen(port, () => {
  console.log(`node listen port ${port}`);
});
