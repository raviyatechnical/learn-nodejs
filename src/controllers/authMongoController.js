const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');
const { apiResponse } = require('../utils');
const jwt = require('jsonwebtoken');

const getUserWithPassword = async (email) => {
  try {
    const user = await UserModel.findOne({ email }).select('+password');
    return user;
  } catch (error) {
    console.error('Error fetching user with password:', error);
    throw error;
  }
};

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: passwordHash,
    });
    user = await newUser.save();
    user = user.toObject();
    delete user.password;
    apiResponse(res, 201, 'User registration successful.', user);
  } catch (error) {
    apiResponse(res, 500, error.message, user);
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User does not exist' });
    const userWithPassword = await getUserWithPassword(email);
    const isMatch = await bcrypt.compare(password, userWithPassword.password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });
    const token = jwt.sign({
      userId: user.id
    }, secretKey);

    console.log(`=============JWT========================`)
    console.log(`JWT token: ${token}`);
    console.log(`============================================`)
    req.session.user = user;
    user = user.toObject();
    user.token = token;
    apiResponse(res, 200, 'User login successful.', user);
  } catch (error) {
    apiResponse(res, 500, error.message, {});
  }
}

