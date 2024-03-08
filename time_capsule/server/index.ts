import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/favicon.ico', (req: Request, res: Response) => {
    res.status(204).end();
});

app.get("/", (req: Request, res: Response) => {
    res.send("Express running on Vercel");
});

app.get('/greet', (req: Request, res: Response) => {
    const { name } = req.query;
    res.json({ greeting: `Hello ${name}! Welcome to my time capsule.` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
