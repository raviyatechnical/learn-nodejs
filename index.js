import express from 'express';
import 'dotenv/config'

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
