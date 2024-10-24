const UserModel = require('../models/UserModel');
const { apiResponse } = require('../utils');
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120, useClones: false });

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
    apiResponse(res, 500, error.message, {});
  }
}