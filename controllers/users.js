const express = require("express");
const router = express.Router();

const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(200).json({
      status: "successful",
      message: "Thanks for registering with us",
    });
  } catch (error) {
    res.status(404).json({
      status: "unsuccessful",
      message: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    //validate the email and password mannualy
    if (!email || !password) {
      return res.status(200).json({
        message: "Please check credentials",
      });
    }
    const user = await User.findOne(req.body);

    if (user) {
      res.status(200).json({
        status: "success",
        message: user,
      });
    }

    if (!user) {
      return res.status(200).json({
        status: "invalid credentials",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "unsucsessful",
      message: error.message,
    });
  }
};
