const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const { validateNameLength, validateName } = require('../middlewares/validate');

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/', validateName, validateNameLength, productsController.registerProduct);

router.delete('/:id', productsController.del);
module.exports = router;
