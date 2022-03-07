const express = require("express");
const app = express();
const cors = require("cors");
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

//importing routes
const rooms = require("./routes/rooms.js");
const users = require("./routes/user");

//middleware
app.use(cors());

//router routes

app.use("/api", rooms);
app.use("/api", users);

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
