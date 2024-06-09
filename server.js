import express from 'express';
import dotEnv from 'dotenv';
import connectDatabase from './config/db.js';
import indexRoutes from './routes/indexRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

dotEnv.config();
//--------database connections --------//
connectDatabase();

//Using Express.JSON
app.use(express.json());

//Routes
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
})
