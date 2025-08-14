// User Modals - Database Schemas
import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    userMail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    userPass: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model("User", UserSchema)
