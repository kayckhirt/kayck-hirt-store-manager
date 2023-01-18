const productsService = require('../services/productsService');

  const getAll = async (req, res) => {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  };  

  const getById = async (req, res) => {
      const { id } = req.params;
      const { type, message } = await productsService.getById(id);
      // Se o service retornar um erro, é retornado o status 404 e a mensagem de erro.
  if (type) return res.status(404).json({ message });

  // Se o service não retornar um erro, é retornado o status 200 e o produto.
  res.status(200).json(message);
  };

module.exports = {
  getAll,
  getById,
};
