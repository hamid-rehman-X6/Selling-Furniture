
const express = require("express");
const userAuthControllers = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/signup", userAuthControllers.signup);
router.post("/login", userAuthControllers.login);
router.post("/logout", userAuthControllers.logout);

module.exports = router;
