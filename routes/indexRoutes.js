import express from 'express';
const router = express.Router();
import AuthController from '../controllers/AuthController.js';

router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

export default router;