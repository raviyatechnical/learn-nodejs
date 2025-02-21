const categoryService = require("../services/category.service");

exports.index = async (req, res) => {
  try {
    const categories = await categoryService.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

exports.store = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const category = await categoryService.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.show = async (req, res) => {
  try {
    const category = await categoryService.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

exports.update = async (req, res) => {
  try {
    const category = await categoryService.update(req.params.id, req.body);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const category = await categoryService.delete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};
