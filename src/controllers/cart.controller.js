const { cartService } = require("../services");

/** create cart record */
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;

        const cart = await cartService.createCart(reqBody);
        if (!cart) {
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
const getCartList = async (req, res) => {
    try {
        const getList = await cartService.getCartList(req, res);

        res.status(200).json({
            success: true,
            message: "Your cart list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get cart by id */
const getCartDetails = async (req, res) => {
    try {
        const getDetails = await cartService.cartById(req.params.cartId);
        if (!getDetails) {
            throw new Error("cart not Found !");
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

/**Update cart */
const updateCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartEx = await cartService.cartById(cartId);
        if (!cartEx) {
            throw new Error("cart not found !");
        }

        await cartService.updateCart(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "Your cart record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartExist = await cartService.getCartList(cartId);
        if (!cartExist) {
            throw new Error("cart not found");
        }

        await cartService.deleteRecord(cartId);

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
    createCart,
    getCartList,
    getCartDetails,
    updateCart,
    deleteRecord
}