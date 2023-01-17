const productsModel = require('../models/productsModel');
// const schema = require('./validations/schemas')

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  if(!place) return { type:404, message: 'Product not found' }
  return { type: null, data: product }
};

module.exports = { 
  getAll,
  getById
};

//SERVICE