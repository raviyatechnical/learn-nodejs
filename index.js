const express = require('express');
const session = require('express-session');
const dotEnv = require('dotenv');
const connectMongoDBDatabase = require('./src/database/connections/mongodb');
const app = express();
const port = process.env.PORT || 3000;
dotEnv.config();
const indexRoutes = require('./src/routes/indexRoutes');

//Using Express.JSON
app.use(express.json());

connectMongoDBDatabase();

global.app = express();
global.secretKey = process.env.JWT_SECRET;

app.use(session({
  secret: secretKey,
  resave: true,
  saveUninitialized: true
}));
//Routes
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`=============Node js Express Connect========================`)
  console.log(`Server running on port: ${port}`);
  console.log(`Server running on url: http://localhost:${port}`);
  console.log(`============================================`)
})