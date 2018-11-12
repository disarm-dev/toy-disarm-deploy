var express = require("express");
var app = express();

/* serves main page */
app.get("/", function (req, res) {
  res.send(200, 'api served')
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("API listening on " + port);
});