const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    status: "successful",
    message: " hello",
  });
});

app.listen(port, () => {
  console.log(`status:ACTIVE in ${port}`);
});
