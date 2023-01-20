const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const salesSchema = Joi.object({
  productId: Joi.number().integer().min(1).required()
.label('productId'),
  quantity: Joi.number().positive().integer().min(1)
.required()
.label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'number.min': '{{#label}} must be greater than or equal to 1',
  'number.positive': '{{#label}} must be greater than or equal to 1',
});

module.exports = { 
  idSchema,
  salesSchema,
};
