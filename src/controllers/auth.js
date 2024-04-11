import bcryptjs from "bcryptjs";
import { registerValidate, loginValidate } from "../validations/auth";
import jwt from "jsonwebtoken";
import User from "../models/UserModel";

class AuthController {
    async register(req, res) {
        try {
            const { username, password, email, avatar } = req.body;
            const { error } = registerValidate.validate(req.body);

            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({ message: errors });
            }

            const emailExisted = await User.findOne({ email });
            if (emailExisted) {
                return res.status(400).json({
                    message: "Email được dùng rồi"
                });
            }
            const hashPassword = await bcryptjs.hash(password, 10);
            const user = await User.create({
                username,
                email,
                avatar,
                password: hashPassword
            });
            res.status(201).json({
                message: "Create Done",
                data: { ...user.toObject(), password: undefined }
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
    async login(req, res) {
        try {
            const { password, email } = req.body;
            const { error } = loginValidate.validate({ password, email });

            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({ message: errors });
            }

            const checkAuth = await User.findOne({ email });
            if (!checkAuth) {
                return res.status(400).json({
                    message: "Email không đúng!"
                });
            }
            const checkPassword = await bcryptjs.compare(password, checkAuth.password);
            if (!checkPassword) {
                return res.status(400).json({
                    message: "Mật khẩu không đúng!"
                });
            }

            const token = jwt.sign({ _id: checkAuth._id }, process.env.SECRET_KEY);
            res.status(201).json({
                message: "Đăng nhập thành công!",
                token,
                data: {
                    _id: checkAuth._id,
                    username: checkAuth.username,
                    email: checkAuth.email,
                    role: checkAuth.role
                }
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default AuthController