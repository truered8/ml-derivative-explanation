const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(8888, () => {
  console.log("Example app listening on port 8888!");
});

exports.app = functions.https.onRequest(app);
