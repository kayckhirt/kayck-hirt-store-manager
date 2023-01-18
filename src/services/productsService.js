const productsModel = require('../models/productsModel');
const schema = require('./validations/validationsInput');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const error = schema.validateId(id);
  if (error.type) return error;

  const product = await productsModel.getById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

module.exports = { 
  getAll,
  getById,
};
