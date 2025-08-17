import RegisterUserSchema from "../models/registerUser.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function registerUser(req, res) {
  console.log("➡️ Register API hit hua");
  console.log("Request Body =>", req.body);

  try {
    const { userName, userMail, userPhone, userPass } = req.body;

    // basic validation
    if (!userName || !userMail || !userPhone || !userPass) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // check existing user
    const existingUser = await RegisterUserSchema.findOne({ userMail });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(userPass, 10);

    // create user
    const newUser = await RegisterUserSchema.create({
      userName,
      userMail,
      userPhone,
      userPass: hashedPassword,
    });

    // check JWT secret
    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET is missing in environment variables");
      return res.status(500).json({ success: false, message: "Server configuration error" });
    }

    // generate token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "9d" }
    );

    console.log("✅ User registered:", newUser._id);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    console.error("❌ Error in registerUser:", err.message);
    return res.status(500).json({
      success: false,
      message: err.message || "Server Error",
    });
  }
}
