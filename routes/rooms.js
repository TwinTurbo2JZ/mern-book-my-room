const express = require("express");
const router = express.Router();

//importing routes
const { getRooms } = require("../controllers/rooms.js");

//protect middleware

//root paths routed
router.route("/").get(getRooms);

module.exports = router;
