"use strict";

var express = require('express');
var router = express.Router();
var inventoryController = require('../controllers/inventoryController');
router.get('/', inventoryController.getInventory);
router.put('/update', inventoryController.updateInventory);
module.exports = router;