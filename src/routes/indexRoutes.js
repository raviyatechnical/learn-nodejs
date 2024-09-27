const express = require('express');
const routes = express.Router();
const { register, login, users } = require('../controllers/authController');

routes.get('/', (req, res) => {
  res.json({ message: 'Learning Node JS' });
});

routes.route('/register').post(register);
routes.route('/login').post(login);
routes.route('/users').get(users);

module.exports = routes;
