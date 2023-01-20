const salesService = require('../services/salesService');

 const registerSalesMany = async (req, res, next) => {
  try {
    const sales = req.body;
    const newSales = await salesService.registerSalesMany(sales);
    if(newSales.status === 400) {
      return res.status(newSales.status).json({ message: newSales.message })
    }
    res.status(201).json(newSales);
  } catch (error) {
    console.log(error);
  };
};

module.exports = { 
  registerSalesMany,
};
