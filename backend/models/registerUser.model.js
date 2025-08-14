import mongoose from "mongoose";

const RegisterUserSchema = new mongoose.Schema({
    userName: { type: String, required: true, trim: true },
    userMail: { type: String, required: true, unique: true, lowercase: true },
    userPhone: { type: String, required: true, unique: true },
    userPass: { type: String, required: true },
})

export default mongoose.model("RegisterUser", RegisterUserSchema)