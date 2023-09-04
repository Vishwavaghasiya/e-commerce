const { orderService } = require("../services");

/** create order record */
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;

        const order = await orderService.createOrder(reqBody);
        if (!order) {
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
const getOrderList = async (req, res) => {
    try {
        const getList = await orderService.getOrderList(req, res);

        res.status(200).json({
            success: true,
            message: "Your order list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get order by id */
const getOrderDetails = async (req, res) => {
    try {
        const getDetails = await orderService.orderById(req.params.orderId);
        if (!getDetails) {
            throw new Error("Order not Found !");
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

/**Update order */
const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orderEx = await orderService.orderById(orderId);
        if (!orderEx) {
            throw new Error("order not found !");
        }

        await orderService.updateOrder(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "Your order record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orderExist = await orderService.getOrderList(orderId);
        if (!orderExist) {
            throw new Error("Order not found");
        }

        await orderService.deleteRecord(orderId);

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
    createOrder,
    getOrderList,
    getOrderDetails,
    updateOrder,
    deleteRecord
}