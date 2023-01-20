const express = require('express');

const routeSales = express.Router();
const salesController = require('../controllers/salesController');
const { productIdUndefinid } = require('../middlewares/validate');

routeSales.post('/', productIdUndefinid, salesController.registerSalesMany);

module.exports = routeSales;
