const { productService } = require("../services");

/* Create product */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Product create  successfully!",
            data: { product },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** get product List */
const getProductList = async (req , res) => {
    try {
        const getList = productService.getProductList(req ,res);

        res.status(200).json({
            success: true,
            message: "Your lists were fetched successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/* Delete Product */
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const productExists = await productService.getProductById(productId);
        if (!productExists) {
            throw new Error("Product not found!");
        }

        await productService.deleteProduct(productId);

        res.status(200).json({
            success: true,
            message: "Product delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createProduct,
    getProductList,
    deleteProduct
};