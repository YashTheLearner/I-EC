import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    mobileNo: {
        type: Number,
        required: false,
    },
    email:{
        type: String,
        required: false,
        unique: [true, "Email is already registered"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ["user", "member", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verificationToken: String,
    verificationTokenExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;