const { shippingService } = require("../services");

/** create shipping record */
const createShipping = async (req, res) => {
    try {
        const reqBody = req.body;

        const shipping = await shippingService.createShipping(reqBody);
        if (!shipping) {
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
const getShippingList = async (req, res) => {
    try {
        const getList = await shippingService.getShippingList(req, res);

        res.status(200).json({
            success: true,
            message: "Your shipping list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get shipping by id */
const getShippingDetails = async (req, res) => {
    try {
        const getDetails = await shippingService.shippingById(req.params.shippingId);
        if (!getDetails) {
            throw new Error("shipping not Found !");
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

/**Update shipping */
const updateShipping = async (req, res) => {
    try {
        const shippingId = req.params.shippingId;

        const shippingEx = await shippingService.shippingById(shippingId);
        if (!shippingEx) {
            throw new Error("Shipping not found !");
        }

        await shippingService.updateShipping(shippingId, req.body);

        res.status(200).json({
            success: true,
            message: "Your Shipping record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const shippingId = req.params.shippingId;

        const shippingExist = await shippingService.getShippingList(shippingId);
        if (!shippingExist) {
            throw new Error("shipping not found");
        }

        await shippingService.deleteRecord(shippingId);

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
    createShipping,
    getShippingList,
    getShippingDetails,
    updateShipping,
    deleteRecord
}