import express from 'express';
import authRoutes from './routes/auth.routes.js';
import websiteRoutes from './routes/website.routes.js';
import sesionRoutes from './routes/sesion.routes.js';
import randomRoutes from './routes/random.routes.js';

const router = express.Router();

//Routes
router.use('/auth', authRoutes);
router.use('/', websiteRoutes);
router.use('/', sesionRoutes);
router.use('/api', randomRoutes);

export default router;