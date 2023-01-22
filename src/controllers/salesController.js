const salesService = require('../services/salesService');

 const registerSalesMany = async (req, res) => {
  try {
    const sales = req.body;
    const newSales = await salesService.registerSalesMany(sales);
    if (newSales.status === 404) {
      return res.status(newSales.status).json({ message: newSales.message });
    }
    res.status(201).json(newSales);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesService.getId(id);
  if (status === 404) return res.status(404).json({ message });
  return res.status(200).json(message);
};
module.exports = { 
  registerSalesMany,
  getAll,
  getId,
};
