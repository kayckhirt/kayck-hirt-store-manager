const salesModel = require('../models/salesModel');
const { getById } = require('../models/productsModel');

const registerSalesMany = async (salesArray) => {
  // let consultaId = [];

    const consultaId = salesArray.map(async (element) => {
    const recebeId = await getById(element.productId); 
    return recebeId;
  });
    const promise = await Promise.all(consultaId);
    if (promise.includes(undefined)) return { status: 404, message: 'Product not found' };
  // if(!array) {
  //   return { status: 404, message: 'Product not found'}
  // }
  //--------------
  // const confereId = getById();
  // const confereIds = await confereId.map((sales) => sales.confereId)

  // const salesArraySchema = Joi.array().items(salesSchema);
  // const error = schema.validateSales(salesArray);
  // if (error) return error;
  // const { error } = salesArraySchema.validate(salesArray);
  // if (error.message.includes('is required')) return { status: 400, message: error.message };
  // if (error.message.includes('must be greater')) return { status: 422, message: error.message };
    
  // Criar venda retornara um id.
  const createSale = await salesModel.createSales();

  const newSalesPromises = salesArray.map((sales) =>
  salesModel.registerSalesMany(createSale, sales.productId, sales.quantity));
  await Promise.all(newSalesPromises);
  return {
    id: createSale,
    itemsSold: salesArray,
  };
  // const newSales = salesArray
  //   .map((sales, index) => ({ id: newSalesResolvePromise[index], ...sales }));
  // return newSales.sort((a, b) => a.id - b.id);
};

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getId = async (id) => {
  const sales = await salesModel.getById(id);
  if (!sales) return { status: 404, message: 'Sale not found' };
  return { type: null, message: sales };
};

module.exports = {
  registerSalesMany,
  getAll,
  getId,
};
