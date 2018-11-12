var express = require("express");
var app = express();

/* serves main page */
app.get("/", function (req, res) {
  res.send(200)
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("API listening on " + port);
});