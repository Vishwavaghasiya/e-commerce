const Joi = require('joi');

/** create coupon */
const createCoupon = {
    body : Joi.object().keys({
        code : Joi.string().required().trim(),
        discountType : Joi.string().required().trim(),
        discountAmount : Joi.number().integer().allow(),
        maxUses : Joi.number().integer().allow(),
        minPurchaseAmount : Joi.number().integer().allow(),
        usedCount : Joi.number().integer().allow(),
        maxUses : Joi.number().integer().allow(),
        conditions : Joi.string().required().trim(),
        user : Joi.string().required().trim()
    }),
};

module.exports = {
    createCoupon
}