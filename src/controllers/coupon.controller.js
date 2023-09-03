const { couponService } = require("../services");

/** create coupon record */
const createCoupon = async (req, res) => {
    try {
        const reqBody = req.body;

        const coupon = await couponService.createCoupon(reqBody);
        if (!coupon) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your data create successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: fasle, message: error.message });
    }
}

/** get list */
const getCouponList = async (req, res) => {
    try {
        const getList = await couponService.getCouponList(req, res);

        res.status(200).json({
            success: true,
            message: "Your coupon list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get coupon by id */
const getCouponDetails = async (req, res) => {
    try {
        const getDetails = await couponService.couponById(req.params.couponId);
        if (!getDetails) {
            throw new Error("coupon not Found !");
        }

        res.status(200).json({
            success: true,
            message: "Your record is successfully get by id !",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update coupon */
const updateCoupon = async (req, res) => {
    try {
        const couponId = req.params.couponId;

        const couponEx = await couponService.couponById(couponId);
        if (!couponEx) {
            throw new Error("coupon not found !");
        }

        await couponService.updateCoupon(couponId, req.body);

        res.status(200).json({
            success: true,
            message: "Your coupon record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const couponId = req.params.couponId;

        const couponExist = await couponService.getCouponList(couponId);
        if (!couponExist) {
            throw new Error("coupon not found");
        }

        await couponService.deleteRecord(couponId);

        res.status(200).json({
            success: true,
            message: "Your record delete successfully !!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createCoupon,
    getCouponList,
    getCouponDetails,
    updateCoupon,
    deleteRecord
}