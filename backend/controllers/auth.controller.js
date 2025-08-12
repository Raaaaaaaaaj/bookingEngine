import RegisterUser from '../models/registerUser.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {

    try {
        const { userName, userMail, userPhone, userPass } = req.body;

        const existingUser = await UserActivation.findOne({ userMail });
        //Check Existing user
        if (existingUser) {
            return res.status(400).json({ message: "User allready exists" });
        }
        //Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const newUser = await RegisterUser.create({ userName, userMail, userPhone, userPass: hashedPassword });
        // Generate Token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "9d" });

        res.status(201).json({ message: "User Registered", token });
    }
    // Catch error
    catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    };
};