const { categoryService } = require("../services");

/** create category record */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
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
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList(req, res);

        res.status(200).json({
            success: true,
            message: "Your category list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get category by id */
const getCategoryDetails = async (req, res) => {
    try {
        const getDetails = await categoryService.categoryById(req.params.categoryId);
        if (!getDetails) {
            throw new Error("category not Found !");
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

/**Update category */
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryEx = await categoryService.categoryById(categoryId);
        if (!categoryEx) {
            throw new Error("category not found !");
        }

        await categoryService.updateCategory(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "Your category record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryExist = await categoryService.getCategoryList(categoryId);
        if (!categoryExist) {
            throw new Error("category not found");
        }

        await categoryService.deleteRecord(categoryId);

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
    createCategory,
    getCategoryList,
    getCategoryDetails,
    updateCategory,
    deleteRecord
}