const Joi = require("joi");

const querySchema = Joi.object({
  item: Joi.string().required(),
  date_of_order:Joi.string().required(),
  quantity:Joi.string().required(),
  Phone:Joi.number().integer().required()
});

module.exports = querySchema;
