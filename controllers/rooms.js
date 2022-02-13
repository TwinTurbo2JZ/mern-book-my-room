//importing models
const Rooms = require("../models/Rooms.js");

exports.getRooms = async (req, res, next) => {
  //test
  try {
    //fetching from database
    const rooms = await Rooms.find();

    res.status(200).json({
      status: "success",
      data: rooms,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
