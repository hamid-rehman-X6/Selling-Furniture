const User = require("../Models/auth.modal");
const jwt = require("jsonwebtoken");
const { handleError } = require("../Middleware/errorHandling");
const { signupSchema, loginSchema } = require("../Validator/authValidation");

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET_key, {
        expiresIn: "1d",
    });
};

// Signup
exports.signup = async (req, res, next) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    // Validation
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return next({ success: false, message: error.details[0].message });
    }

    if (!email || !firstName || !lastName || !password || !confirmPassword) {
        return next({ success: false, message: "All fields are required!" });
    }

    if (password !== confirmPassword) {
        return next({ success: false, message: "Passwords do not match" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next({ success: false, message: "Email already exists" });
        }

        const newUser = new User({ email, firstName, lastName, password });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User Signup successfully",
            data: [newUser],
        });
    } catch (error) {
        next(error);
    }
};

// Login
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Validation
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return next({ success: false, message: error.details[0].message });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next({
                success: false,
                message: "User does not exist. Please sign up now.",
            });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return next({ success: false, message: "Invalid email or password" });
        }

        const token = generateToken(user._id);
        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
        res.json({ success: true, message: "Login successful", tokenId: token });
    } catch (error) {
        next(error);
    }
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.json({ success: true, message: "Logged out successfully" });
};
