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

const registerProduct = async (name) => {
  const insertProduct = await productsModel.registerProduct(name);
  return insertProduct;
};

const del = async (id) => {
  const deleteProduct = await productsModel.del(id);
  if (deleteProduct.affectedRows === 1) return { type: 204 };
  
  return { status: 404, message: 'Product not found' };
};

module.exports = { 
  getAll,
  getById,
  registerProduct,
  del,
};
