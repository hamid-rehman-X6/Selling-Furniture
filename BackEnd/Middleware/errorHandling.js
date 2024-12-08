exports.handleError = (err, req, res, next) => {
    const { message = "Internal Server Error", success = "false" } = err;
    res.json({ success: success, message: message });
};
