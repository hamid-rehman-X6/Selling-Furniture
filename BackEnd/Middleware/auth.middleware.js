
const jwt = require("jsonwebtoken");

exports.authenticateUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.json({ success: false, message: "Unauthorized, please log in" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token is invalid or expired" });
    }
};
