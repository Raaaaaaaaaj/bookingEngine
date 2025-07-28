// Controller
const User = require('../models/user.model');

const loginUser = async (req, res) => {
    const { userMail, userPass } = req.body;

    try {
        const user = await User.findOne({ userMail });

        if (!user || user.userPass !== userPass) {
            return res.status(401).json({ messgae: "Invalid Credentials" })
        }
        res.status(200).json({ message: "Login Success", user })
    }

    catch (error) {
        res.status(500).json({ message: "Server error", error })
    }
}

module.exports = { loginUser }