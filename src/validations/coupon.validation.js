const Joi = require('joi');

/** create coupon */
const createCoupon = {
    body : Joi.object().keys({
        code : Joi.string().required().trim(),
        discountAmount : Joi.number().integer().allow(),
        maxUses : Joi.number().integer().allow(),
        usedCount : Joi.number().integer().allow(),
        maxUses : Joi.number().integer().allow(),
        minPurchaseAmount : Joi.string().required().trim(),
        conditions : Joi.string().required().trim()
    }),
};

module.exports = {
    createCoupon
}