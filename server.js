const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.get(["/"], function (req, res) {
  res.render("index.ejs");
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));