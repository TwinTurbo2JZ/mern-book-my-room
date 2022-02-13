//importing models
const Rooms = require("../models/Rooms.js");

exports.getRooms = async (req, res, next) => {
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

exports.getRoom = async (req, res, next) => {
  try {
    //fetching from database
    const room = await Rooms.findById(req.params.id);

    if (!room) {
      return next(
        res.status(404).json({
          error: `room not founf with the id:${req.params.id}`,
        })
      );
    }

    res.status(200).json({
      status: "success",
      data: room,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
