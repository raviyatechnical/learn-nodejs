const router = require("express").Router();
const categoryController = require("../controllers/category.controller");

router.route('/').get(categoryController.index); // GET method for retrieving records
router.route('/').post(categoryController.store); // POST method for creating a new record
router.route('/:id').get(categoryController.show); // GET method for retrieving a record
router.route('/:id').put(categoryController.update); // PUT method for updating a record  
router.route('/:id').delete(categoryController.destroy); // DELETE method for deleting a record

module.exports = router;
