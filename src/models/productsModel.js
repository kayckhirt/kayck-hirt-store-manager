const connection = require('./db/connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  return result;
};

const getById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
    );
    return product;
};

const registerProduct = async (name) => {
    const [product] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
    );
    const newProduct = {
      id: product.insertId,
      name,
    };
    return newProduct;
};

module.exports = {
  getAll,
  getById,
  registerProduct,
};
