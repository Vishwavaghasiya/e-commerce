const { blogpostService } = require("../services");

/** create blogpost record */
const createBlogpost = async (req, res) => {
    try {
        const reqBody = req.body;

        const blogpost = await blogpostService.createBlogpost(reqBody);
        if (!blogpost) {
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
const getBlogpostList = async (req, res) => {
    try {
        const getList = await blogpostService.getBlogpostList(req, res);

        res.status(200).json({
            success: true,
            message: "Your blogpost list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get blogpost by id */
const getBlogpostDetails = async (req, res) => {
    try {
        const getDetails = await blogpostService.blogpostById(req.params.blogpostId);
        if (!getDetails) {
            throw new Error("blogpost not Found !");
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

/**Update blogpost */
const updateBlogpost = async (req, res) => {
    try {
        const blogpostId = req.params.blogpostId;

        const blogpostEx = await blogpostService.blogpostById(blogpostId);
        if (!blogpostEx) {
            throw new Error("blogpost not found !");
        }

        await blogpostService.updateBlogpost(blogpostId, req.body);

        res.status(200).json({
            success: true,
            message: "Your blogpost record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const blogpostId = req.params.blogpostId;

        const blogpostExist = await blogpostService.getBlogpostList(blogpostId);
        if (!blogpostExist) {
            throw new Error("blogpost not found");
        }

        await blogpostService.deleteRecord(blogpostId);

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
    createBlogpost,
    getBlogpostList,
    getBlogpostDetails,
    updateBlogpost,
    deleteRecord
}