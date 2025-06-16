"use strict";

var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var productController = require('../controllers/productController');
var uploadDir = '../frontend/public/Img_project';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true
  });
}
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, '../frontend/public/Img_project/');
  },
  filename: function filename(req, file, cb) {
    var uniqueName = "".concat(Date.now()).concat(path.extname(file.originalname));
    cb(null, uniqueName);
  }
});
var upload = multer({
  storage: storage
});
router.get('/search', productController.searchProducts);
router.get('/:id', productController.getProductById);
router["delete"]('/:id', productController.deleteProduct);
router.post('/', upload.array('images', 10), productController.createProduct);
router.put('/:id', upload.array('images', 10), productController.updateProduct);
module.exports = router;