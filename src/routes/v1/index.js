const express = require('express');

const categoryRoute = require('./category.route');
const productRoute = require('./product.route');
const userRoute = require('./user.route');
const eComRoute = require('./eCom.route');

const router = express.Router();

router.use('/category', categoryRoute);
router.use('/product', productRoute);
router.use('/user', userRoute);
router.use('/e-com', eComRoute);

module.exports = router;