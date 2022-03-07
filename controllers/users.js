const express = require("express");
const router = express.Router();

const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(200).JSON({
      status: success,
      message: "Thanks for registering with us",
    });
  } catch (error) {
    res.status(400).json({
      status: "unsuccessful",
      message: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  //   const { email, password } = req.body;

  try {
    const user = await User.findOne(req.body);

    if (user) {
      res.status(200).json({
        status: "success",
        message: user,
      });
    }

    if (!user) {
      return res.status(200).json({
        status: "user not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "unsucsessful",
      message: error.message,
    });
  }
};
