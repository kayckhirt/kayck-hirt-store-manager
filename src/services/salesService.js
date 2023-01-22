const salesModel = require('../models/salesModel');
const { getById } = require('../models/productsModel');

const registerSalesMany = async (salesArray) => {
    const consultaId = salesArray.map(async (element) => {
    const recebeId = await getById(element.productId); 
    return recebeId;
  });
    const promise = await Promise.all(consultaId);
    if (promise.includes(undefined)) return { status: 404, message: 'Product not found' };

  // Criar venda retornara um id.
    const createSale = await salesModel.createSales();

    const newSalesPromises = salesArray.map((sales) =>
    salesModel.registerSalesMany(createSale, sales.productId, sales.quantity));
    await Promise.all(newSalesPromises);
    return {
      id: createSale,
      itemsSold: salesArray,
    };
};

// const getAll = async () => {
//   const sales = await salesModel.getAll();
//   return sales;
// };

// const getId = async (id) => {
//   const sales = await salesModel.getById(id);
//   if (!sales) return { status: 404, message: 'Sale not found' };
//   return { type: null, message: sales };
// };

module.exports = {
  registerSalesMany,
  // getAll,
  // getId,
};
