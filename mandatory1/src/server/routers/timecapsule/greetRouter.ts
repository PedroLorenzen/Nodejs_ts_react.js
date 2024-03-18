import { Router } from 'express';

const PORT = 3000;

const router = Router();

export default router;

router.get('/greet', (req, res) => {
    const { name } = req.query;
    res.json({ greeting: `Hello ${name}! Welcome to my time capsule.` });
});
