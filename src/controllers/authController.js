const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');
const { apiResponse } = require('../utils');
const jwt = require('jsonwebtoken');
const NodeCache = require( "node-cache" );
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120, useClones: false });

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
    apiResponse(res, 500, error.message,{});
  }
}

exports.users = async (req, res, next) => {
  try {
    const cacheKey = `api-users-page-1`;
    let records = [];
    console.log("Cache Key:", cacheKey);
    console.log("Cache exists:", cache.has(cacheKey));
    console.log("Cache stats:", cache.getStats());
    // cache.del(cacheKey);
    if (cache.has(cacheKey)) {
      // Retrieve cached data
      records = cache.get(cacheKey);
      console.log("Cached data:", records);
    } else {
      // Fetch data from DB
      records = await UserModel.find();
      console.log("Fetched from DB:", records);

      // Cache the data with TTL of 600 seconds (10 minutes)
      cache.set(cacheKey, records, 600); // TTL in seconds
    }

    apiResponse(res, 200, 'Users ', records);
  } catch (error) {
    apiResponse(res, 500, error.message,{});
  }
}