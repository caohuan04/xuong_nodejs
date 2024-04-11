import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            default: "admin"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const User = mongoose.model("User", UserSchema);
export default User;