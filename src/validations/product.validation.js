const Joi = require('joi');

/** validation of product */
/** create product */
const createProduct = {
    body : Joi.object().keys({
        productName : Joi.string().required().trim(),
        description : Joi.string().required().trim(),
        price : Joi.number().integer().allow(),
        user : Joi.string().required().trim(),
        category : Joi.string().required().trim()
    }),
};

/** get product */
const getProductList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createProduct,
    getProductList
}