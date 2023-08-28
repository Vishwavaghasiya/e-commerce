const { userService, productService, categoryService } = require("../services");

/** get e-commerce list */
const getAllList = async (req , res) => {
    try {
        const getUser = await userService.getUserList();
        const getCategory = await categoryService.getCategoryList();
        const getProduct = await productService.getProductList();

        res.status(200).json({
            success: true,
            message: "Your lists were fetched successfully!",
            data: { getUser, getCategory, getProduct }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    getAllList
}