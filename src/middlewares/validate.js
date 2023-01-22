const validateName = (req, res, next) => {
  const { name } = req.body;
  const validName = name !== undefined;
  if (!validName) return res.status(400).json({ message: '"name" is required' });
  next();
};

const validateNameLength = (req, res, next) => {
  const { name } = req.body;
  const error = name.length > 4;
  if (!error) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

const salesValidate = (req, res, next) => {
  const sale = req.body;
  const productError = sale.every((item) => item.productId);
  if (!productError) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const quantityError = sale.every((item) => item.quantity === undefined);
  if (quantityError) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const quantityMin = sale.every((item) => item.quantity > 0);
  if (!quantityMin) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateNameLength,
  validateName,
  salesValidate,
};
