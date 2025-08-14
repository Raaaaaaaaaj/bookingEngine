console.log("Register API hit hua");
console.log("JWT_SECRET =>", process.env.JWT_SECRET);
import RegisterUserSchema from '../models/registerUser.model.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function registerUser(req, res) {
    console.log("JWT_SECRET from env =>", process.env.JWT_SECRET);
    try {
        console.log("Received body:", req.body);
        const { userName, userMail, userPhone, userPass } = req.body;

        const existingUser = await RegisterUserSchema.findOne({ userMail });
        //Check Existing user
        if (existingUser) {
            return res.status(400).json({ message: "User allready exists" });
        }
        //Hash Password
        const hashedPassword = await bcrypt.hash(userPass, 10);

        // Create User
        const newUser = await RegisterUserSchema.create({ userName, userMail, userPhone, userPass: hashedPassword });
        // Generate Token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "9d" });

        res.status(201).json({ success: true, message: "User Registered", token });
        return;
    }
    // Catch error
    catch (err) {
        console.error("Error in registerUser:", err); // <-- yaha se exact error pata chalega
        res.status(500).json({ message: "Server Error", error: err.message });
    };
};
