const BaseService = require("./base.service");
const categoryRepository = require("../repositories/category.repository");

class CategoryService extends BaseService {
  constructor() {
    super(categoryRepository); // Inject Category Repository
  }

  async getCategoryBySlug(slug) {
    return await this.repository.findBySlug(slug);
  }
}

module.exports = new CategoryService();
