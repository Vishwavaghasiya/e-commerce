const { categoryService } = require("../services");

/* Create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error('Something wents wrong , please try again or later !');
        }

        res.status(200).json(
            {
                success: true,
                message: "category module create successfully !",
                data: { category },
            }
        );
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** getCategoryList */
const getCategoryList = async (req , res) => {
    try {
        const getList = categoryService.getCategoryList(req ,res);

        res.status(200).json({
            success: true,
            message: "Your lists were fetched successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/* Delete category */
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryList(categoryId);
        if (!categoryExists) {
            throw new Error("Category not found!");
        }

        await categoryService.deleteCategory(categoryId);

        res.status(200).json({
            success: true,
            message: "Category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory
};