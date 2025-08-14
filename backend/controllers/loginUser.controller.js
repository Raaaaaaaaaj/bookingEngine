import RegisterUserSchema from '../models/registerUser.model.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const loginUser = async (req, res) => {
    const { userMail, userPass } = req.body;
    try {
        // Find user by email
        const user = await RegisterUserSchema.findOne({ userMail });
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        // Compare hashed password
        const isMatch = await bcrypt.compare(userPass, user.userPass);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "9d" }
        );
        res.status(200).json({
            success: true,
            message: "Login Success",
            token,
            user: {
                id: user._id,
                name: user.userName,
                email: user.userMail
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
export default loginUser;
