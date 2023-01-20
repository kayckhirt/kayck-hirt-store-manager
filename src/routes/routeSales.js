const express = require('express');

const routeSales = express.Router();
const salesController = require('../controllers/salesController');
const { salesValidate } = require('../middlewares/validate');

routeSales.post('/', salesValidate, salesController.registerSalesMany);

routeSales.get('/', salesController.getAll);

routeSales.get('/:id', salesController.getId);

module.exports = routeSales;
