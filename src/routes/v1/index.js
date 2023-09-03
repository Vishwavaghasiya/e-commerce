const express = require('express');

const categoryRoute = require('./category.route');
const productRoute = require('./product.route');
const userRoute = require('./user.route');
const eComRoute = require('./eCom.route');
const blogpostRoute = require('./blogpost.route');
const cartRoute = require('./cart.model');
const couponRoute = require('./coupon.route');
const notificationRoute = require('./notification.route');
const orderRoute = require('./order.route');
const paymentRoute = require('./payment.route');
const reviewRoute = require('./review.route');
const shippingRoute = require('./shipping.route');
const wishlistRoute = require('./wishlist.route');

const router = express.Router();

router.use('/category', categoryRoute);
router.use('/product', productRoute);
router.use('/user', userRoute);
router.use('/e-com', eComRoute);
router.use('/blogpost', blogpostRoute);
router.use('/cart', cartRoute);
router.use('/coupon', couponRoute);
router.use('/notification', notificationRoute);
router.use('order', orderRoute);
router.use('payment', paymentRoute);
router.use('/review', reviewRoute);
router.use('/shipping', shippingRoute);
router.use('/wishlist', wishlistRoute);

module.exports = router;