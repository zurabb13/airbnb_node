import app from './app.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';

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

app.listen(port, () => {
  console.log(`node listen port ${port}`);
});
