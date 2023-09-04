const { wishlistService } = require("../services");

/** create wishlist record */
const createWishlist = async (req, res) => {
    try {
        const reqBody = req.body;

        const wishlist = await wishlistService.createWishlist(reqBody);
        if (!wishlist) {
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
const getWishlist = async (req, res) => {
    try {
        const getList = await wishlistService.getWishlistList(req, res);

        res.status(200).json({
            success: true,
            message: "Your wishlist list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get wishlist by id */
const getWishlistDetails = async (req, res) => {
    try {
        const getDetails = await wishlistService.wishlistById(req.params.wishlistId);
        if (!getDetails) {
            throw new Error("wishlist not Found !");
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

/**Update wishlist */
const updateWishlist = async (req, res) => {
    try {
        const wishlistId = req.params.wishlistId;

        const wishlistEx = await wishlistService.wishlistById(wishlistId);
        if (!wishlistEx) {
            throw new Error("Wishlist not found !");
        }

        await wishlistService.updateWishlist(wishlistId, req.body);

        res.status(200).json({
            success: true,
            message: "Your wishlist record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const wishlistId = req.params.wishlistId;

        const wishlistExist = await wishlistService.getWishlistList(wishlistId);
        if (!wishlistExist) {
            throw new Error("wishlist not found");
        }

        await wishlistService.deleteRecord(wishlistId);

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
    createWishlist,
    getWishlist,
    getWishlistDetails,
    updateWishlist,
    deleteRecord
}