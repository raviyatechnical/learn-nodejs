const BaseMongooseRepository = require('./base.mongoose.repository');
const Category = require('../models/mongoose/category.model');

class CategoryRepository extends BaseMongooseRepository {
  constructor() {
    super(Category);
  }

  async findBySlug(slug) {
    return await this.model.findOne({ slug });
  }
}
module.exports = new CategoryRepository();