const { productService } = require("../services");

/** create product record */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your data create successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get list */
const getProductList = async (req, res) => {
    try {
        const getList = await productService.getProductList(req, res);

        res.status(200).json({
            success: true,
            message: "Your product list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get product by id */
const getProductDetails = async (req, res) => {
    try {
        const getDetails = await productService.productById(req.params.productId);
        if (!getDetails) {
            throw new Error("product not Found !");
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

/**Update product */
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.productById(productId);
        if (!productEx) {
            throw new Error("product not found !");
        }

        await productService.updateProduct(productId, req.body);

        res.status(200).json({
            success: true,
            message: "Your product record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productExist = await productService.getProductList(productId);
        if (!productId) {
            throw new Error("product not found");
        }

        await productService.deleteRecord(productId);

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
    createProduct,
    getProductList,
    getProductDetails,
    updateProduct,
    deleteRecord
}