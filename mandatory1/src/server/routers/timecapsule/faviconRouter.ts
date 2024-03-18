import { Router } from 'express';

const PORT = 3000;

const router = Router();

export default router;

router.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});
