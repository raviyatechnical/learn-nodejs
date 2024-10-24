const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { apiResponse } = require('../utils');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    let user = await User.findOne({
      where: { email }
    });

    if (user) {
      return apiResponse(res, 400, 'User already exists.');
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
    });
    // Remove password from the returned user object
    const userResponse = { ...newUser.get(), password: undefined };
    // Send success response
    apiResponse(res, 201, 'User registration successful.', userResponse);
  } catch (error) {
    apiResponse(res, 500, error.message);
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(`=============Login========================`)
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  try {
    let user = await User.findOne({
      where: {
        email: email
      }
    });
    if (!user) {
      return apiResponse(res, 400, 'User does not exist.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return apiResponse(res, 400, 'Incorrect password.');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, secretKey);

    console.log(`=============JWT========================`);
    console.log(`JWT token: ${token}`);
    console.log(`============================================`);

    // Set session and respond with token
    req.session.user = user;
    user = user.toJSON();
    user.token = token;
    apiResponse(res, 200, 'User login successful.', user);
  } catch (error) {
    apiResponse(res, 500, error.message, {});
  }
}