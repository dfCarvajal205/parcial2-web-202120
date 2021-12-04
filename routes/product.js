var express = require('express');
var router = express.Router();
const Product = require('../controllers/product.js')

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', async function (req, res, next) {
  const products = await Product.getProducts(req.query.q);
  res.send(products);
});

module.exports = router;
