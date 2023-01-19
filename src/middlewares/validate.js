const validateNameLength = (req, res, next) => {
  const { name } = req.body;
  const error = name.length > 4;
  if (!error) res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  const validName = name !== undefined;
  if (!validName) res.status(400).json({ message: '"name" is required' });
  next();
};

module.exports = {
  validateNameLength,
  validateName,
};
