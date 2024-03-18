import { Router } from 'express';

const PORT = 3000;

const router = Router();

export default router;

router.get('/', (req, res) => {
    res.send('Express running on Vercel');
});
