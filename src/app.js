const express = require('express');
const session = require('express-session');
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotEnv = require('dotenv');
const connectMongoDBDatabase = require('./database/connections/mongodb');
const connectSequelizeDatabase = require('./database/connections/sequelize');
const app = express();
dotEnv.config();
// const port = process.env.PORT || 3000;
const indexRoutes = require('./routes/indexRoutes');

// Middleware
app.use(cors()); // Enable CORS
app.use(helmet()); // Security Headers
app.use(morgan("dev")); // Logger
app.use(express.json()); // JSON Body Parser
app.use(express.urlencoded({ extended: true })); // URL-encoded Parser

connectMongoDBDatabase();
connectSequelizeDatabase();

global.app = express();
global.secretKey = process.env.JWT_SECRET;

app.use(session({
  secret: secretKey,
  resave: true,
  saveUninitialized: true
}));
//Routes
app.use("/", indexRoutes);

// app.listen(port, () => {
//   console.log(`=============Node js Express Connect========================`)
//   console.log(`Server running on port: ${port}`);
//   console.log(`Server running on url: http://localhost:${port}`);
//   console.log(`============================================`)
// })

module.exports = app;