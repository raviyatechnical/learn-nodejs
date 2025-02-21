
class BaseMongooseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findAll(filter = {}, options = {}) {
    return await this.model.find(filter, null, options).populate(options.populate || "");
  }

  async findById(id, options = {}) {
    return await this.model.findById(id).populate(options.populate || "");
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseMongooseRepository;