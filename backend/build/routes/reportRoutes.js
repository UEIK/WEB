"use strict";

var express = require('express');
var router = express.Router();
var reportController = require('../controllers/reportController');
router.get('/revenue', reportController.getRevenueReport);
module.exports = router;