import express from 'express';
import auth from '../../middlewares/auth.middleware.js';
import { renderError, renderLogout } from '../../controllers/sesion.controller.js';

const router = express.Router();

//Routes
router.get('/logout', auth, renderLogout);
router.get('/register-error',renderError);
router.get('/login-error', renderError);

export default router;