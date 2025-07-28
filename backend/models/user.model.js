// User Modals - Database Schemas
const mongoose = require('mongoose');
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

module.exports = mongoose.model('User', UserSchema)