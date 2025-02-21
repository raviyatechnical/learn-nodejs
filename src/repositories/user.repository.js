const BaseMongooseRepository = require('./base.mongoose.repository');
const User = require('../models/mongoose/user.model');

class UserRepository extends BaseMongooseRepository {
  constructor() {
    super(User);
  }
}
module.exports = new UserRepository();