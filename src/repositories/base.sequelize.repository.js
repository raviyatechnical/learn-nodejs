
class BaseSequelizeRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findAll(filter = {}, options = {}) {
    return await this.model.findAll({ where: filter, ...options });
  }

  async findById(id, options = {}) {
    return await this.model.findByPk(id, options);
  }

  async update(id, data) {
    const entity = await this.model.findByPk(id);
    if (!entity) throw new Error("Not found");
    return await entity.update(data);
  }

  async delete(id) {
    const entity = await this.model.findByPk(id);
    if (!entity) throw new Error("Not found");
    return await entity.destroy();
  }
}

module.exports = BaseSequelizeRepository;
