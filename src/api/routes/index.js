const express = require('express')
const router = express.Router()

const AddProductsController = require('../controllers/AddProductController')
const ListAllProductsController = require('../controllers/ListAllProductsController')

const addProductController = new AddProductsController();
const listAllProductsController = new ListAllProductsController();

router.post('/products', addProductController.handle);
router.get('/products', listAllProductsController.handle);

module.exports = router;