const express = require("express");
const router = express.Router();

//importing routes
const { register, login } = require("../controllers/users");

//protect middleware

//root paths routed
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
