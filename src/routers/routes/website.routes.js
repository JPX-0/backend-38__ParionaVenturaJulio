
import express from 'express';
import compressionApi from '../../api/compression.api.js';
import auth from '../../middlewares/auth.middleware.js';
import { renderHome, renderInfo, renderLobby } from '../../controllers/websites.controller.js';

const router = express.Router();

//Routes
router.get('/', renderLobby);
router.get('/home', auth, renderHome);
router.get("/info", compressionApi, renderInfo);

export default router;