import express from 'express';
import { register } from '../controllers/user.controller.js';
const router = express.Router();

router.post('/register', register);

// Ruta para login
router.post('/login', (req, res) => {
  res.json({ message: 'Ruta de login funcionando' });
});

export default router;