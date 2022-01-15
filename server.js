const express = require("express");
const app = express();
const morgan = require("morgan");

//dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//port
const port = 5000 || process.env.PORT;
//connect database
const connectDB = require("./db.js");
connectDB();

//cookie parser
const cookieParser = require("cookie-parser");

//middleware

//body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

//routes

app.get("/", (req, res) => {
  res.json({
    status: "successful",
    message: " hello",
  });
});

//listening here
app.listen(port, () => {
  console.log(`status:ACTIVE in ${port}`);
});
