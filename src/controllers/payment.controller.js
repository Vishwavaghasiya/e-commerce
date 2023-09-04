const { paymentService } = require("../services");

/** create payment record */
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;

        const payment = await paymentService.createPayment(reqBody);
        if (!payment) {
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
const getPaymentList = async (req, res) => {
    try {
        const getList = await paymentService.getPaymentList(req, res);

        res.status(200).json({
            success: true,
            message: "Your payment list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get payment by id */
const getPaymentDetails = async (req, res) => {
    try {
        const getDetails = await paymentService.paymentById(req.params.paymentId);
        if (!getDetails) {
            throw new Error("payment not Found !");
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

/**Update payment */
const updatePayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const paymentEx = await paymentService.paymentById(paymentId);
        if (!paymentEx) {
            throw new Error("payment not found !");
        }

        await paymentService.updatePayment(paymentId, req.body);

        res.status(200).json({
            success: true,
            message: "Your payment record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const paymentExist = await paymentService.getPaymentList(paymentId);
        if (!paymentExist) {
            throw new Error("payment not found");
        }

        await paymentService.deleteRecord(paymentId);

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
    createPayment,
    getPaymentList,
    getPaymentDetails,
    updatePayment,
    deleteRecord
}