
import express from 'express';
import { renderRandom } from '../../controllers/websites.controller.js';

const router = express.Router();

//Routes
router.get('/random', renderRandom);
router.get('/random/:cantp', renderRandom);

export default router;