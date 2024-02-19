import express from 'express';
const router = express.Router();

import { getAll, getById, create } from '../controller/house.js';

router.route('/').get(getAll).post(create);
router.route('/:id').get(getById);

export default router;
