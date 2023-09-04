const { reviewService } = require("../services");

/** create review record */
const createReview = async (req, res) => {
    try {
        const reqBody = req.body;

        const review = await reviewService.createReview(reqBody);
        if (!review) {
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
const getReviewList = async (req, res) => {
    try {
        const getList = await reviewService.getReviewList(req, res);

        res.status(200).json({
            success: true,
            message: "Your review list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get review by id */
const getReviewDetails = async (req, res) => {
    try {
        const getDetails = await reviewService.reviewById(req.params.reviewId);
        if (!getDetails) {
            throw new Error("review not Found !");
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

/**Update review */
const updateReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;

        const reviewEx = await reviewService.reviewById(reviewId);
        if (!reviewEx) {
            throw new Error("review not found !");
        }

        await reviewService.updateReview(reviewId, req.body);

        res.status(200).json({
            success: true,
            message: "Your review record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;

        const reviewExist = await reviewService.getReviewList(reviewId);
        if (!reviewExist) {
            throw new Error("review not found");
        }

        await reviewService.deleteRecord(reviewId);

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
    createReview,
    getReviewList,
    getReviewDetails,
    updateReview,
    deleteRecord
}