import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import house from './router/house.js';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('/api/v1/house', house);

export default app;
