const { userService, productService, categoryService } = require("../services");

/** create user record */
const createRecord = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createRecord(reqBody);
        const product = await productService.createRecord(reqBody);
        const category = await categoryService.createRecord(reqBody);

        if (!user, !product, !category) {
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
const getList = async (req, res) => {
    try {
        const getUser = await userService.getList(req, res);
        const getCategory = await categoryService.getList(req, res);
        const getProduct = await productService.getList(req, res);

        res.status(200).json({
            success: true,
            message: "Your lists were created successfully!",
            data: { getUser, getCategory, getProduct }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;
        const productId = req.params.userId;
        const categoryId = req.params.userId;

        const userExist = await userService.getList(reqBody);
        const productExist = await productService.getList(reqBody);
        const categoryExist = await categoryService.getList(reqBody);

        const results = [userExist, productExist, categoryExist];

        if (results.some(result => !result)) {
            throw new Error("Failed to fetch lists!");
        }

        await userService.deleteRecord(userId);
        await productService.deleteRecord(productId);
        await categoryService.deleteRecord(categoryId);

        res.status(200).json({
            success: true,
            message: "Your record delete successfully !!"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createRecord,
    getList,
    deleteRecord
}