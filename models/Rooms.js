const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
      maxlength: [100, "cannot be more than 100 characters"],
    },
    maxpeople: {
      type: Number,
      required: [true, "please add maximum allowed guests"],
      maxlength: [100, "cannot add more than 100 people"],
    },
    phone: {
      type: String,
      maxlength: [20, "cannot be more than 20 characters long "],
    },
    rent: {
      type: Number,
      required: true,
    },
    imageurl: [],
    currentbookings: [],
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rooms", RoomSchema);
