const express = require("express");
const router = express.Router();

//importing routes
const { getRooms, getRoom } = require("../controllers/rooms.js");

//protect middleware

//root paths routed
router.route("/").get(getRooms);
router.route("/:id").get(getRoom);

module.exports = router;
