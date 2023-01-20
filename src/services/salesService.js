const Joi = require('joi');
const salesModel = require('../models/salesModel');
const { salesSchema } = require('./validations/schemas');


const registerSalesMany = async (salesArray) => {
  // const salesArraySchema = Joi.array().items(salesSchema);
  // const { error } = salesArraySchema.validate(salesArray);
  // if (error.message.includes('is required')) return { status: 400, message: error.message };
  // if (error.message.includes('must be greater')) return { status: 422, message: error.message };
    
  //Criar venda retornara um id.
  const createSale = await salesModel.createSales();

  const newSalesPromises = salesArray.map((sales) => salesModel.registerSalesMany(createSale, sales.productId, sales.quantity));
  await Promise.all(newSalesPromises);
  return {
    id: createSale,
    itemsSold: salesArray,
  };
  // const newSales = salesArray
  //   .map((sales, index) => ({ id: newSalesResolvePromise[index], ...sales }));
  // return newSales.sort((a, b) => a.id - b.id);
};

module.exports = {
  registerSalesMany,
};
