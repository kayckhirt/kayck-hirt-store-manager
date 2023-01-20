const { idSchema, salesSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { status: 404, message: 'Product not found' };
  
  return { type: null, message: '' };
};

const validateSales = (salesArray) => {
  const { error } = salesSchema.validate(salesArray);
  if (error.message.includes('is required')) {
 return {
  status: 400, message: error.message }; 
}
  if (error.message.includes('must be greater')) {
 return {
    status: 422, error: error.message }; 
}
};
module.exports = {
  validateId,
  validateSales,
};