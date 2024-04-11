import Joi from "joi";

const registerValidate = Joi.object({
    username: Joi.string().min(3).max(10).required().messages({
        "any.required": "Username thiếu rồi",
        "string.min": "Username phải nhiều hơn 3 ký tự",
        "string.max": "Username phải nhỏ hơn 10 ký tự"
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Không đúng định dạng email",
        "any.required": "Email thiếu rồi"
    }),
    password: Joi.string().min(6).max(20).required().messages({
        "any.required": "Password thiếu rồi",
        "string.min": "Password phải nhiều hơn 6 ký tự",
        "string.max": "Password phải nhỏ hơn 20 ký tự"
    }),
    avatar: Joi.string(),
    role: Joi.string(),
}).options({
    abortEarly: false
});

const loginValidate = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Không đúng định dạng email",
        "any.required": "Email thiếu rồi"
    }),
    password: Joi.string().min(6).max(20).required().messages({
        "any.required": "Password thiếu rồi",
        "string.min": "Password phải nhiều hơn 6 ký tự",
        "string.max": "Password phải nhỏ hơn 20 ký tự"
    })
}).options({
    abortEarly: false
});

export { registerValidate, loginValidate };
