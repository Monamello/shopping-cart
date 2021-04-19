const Joi = require('joi');

const CartSchema = Joi.object({
    total: Joi.number(),
    subtotal: Joi.number(),
    item: Joi.number(),
    ticket: Joi.number(),
    products: Joi.array().items(Joi.object()).required(),
});

module.exports = CartSchema;
