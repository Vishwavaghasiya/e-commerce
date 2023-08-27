const { userService, productService, categoryService } = require("../services");

/** create record */
const createRecord = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createRecord(reqBody);
        const product = await productService.createRecord(reqBody);
        const category = await categoryService.createRecord(reqBody);

        if (!user || !product || !category) {
            throw new Error("Something went wrong, please try again later!!");
        }

        res.status(200).json({
            success: true,
            message: "Your data was created successfully!!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
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
            message: "Your lists were fetched successfully!",
            data: { getUser, getCategory, getProduct }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;
        const productId = req.params.productId;
        const categoryId = req.params.categoryId;

        const userExist = await userService.getList(userId);
        const productExist = await productService.getList(productId);
        const categoryExist = await categoryService.getList(categoryId);

        const results = [userExist, productExist, categoryExist];

        if (!results) {
            throw new Error("Failed to fetch lists !")
        }

        await userService.deleteRecord(userId);
        await productService.deleteRecord(productId);
        await categoryService.deleteRecord(categoryId);

        res.status(200).json({
            success: true,
            message: "Your records were deleted successfully!!"
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createRecord,
    getList,
    deleteRecord
}