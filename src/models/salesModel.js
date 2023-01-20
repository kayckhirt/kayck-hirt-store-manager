const connection = require('./db/connection');

// const dateNow = Date.now();

const createSales = async() => {
  const [onlySale] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())');
    return onlySale.insertId;
};

const registerSalesMany = async(salesId, productId, quantity) => {
  const [sales] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',[salesId, productId, quantity]);
    return sales.insertId;
};

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales_products');
  return result;
};

const getById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?',
    [id],
    );
    return product;
};
module.exports = {
  registerSalesMany,
  createSales,
  getAll,
  getById,
};
