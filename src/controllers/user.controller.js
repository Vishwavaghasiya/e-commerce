const { userService } = require("../services");

/* Create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "User create  successfully!",
            data: user,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* Delete user */
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("User not found!");
        }

        await userService.deleteUser(userId);

        res.status(200).json({
            success: true,
            message: "User delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createUser,
    deleteUser
};