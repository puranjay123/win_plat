"use strict";
require("dotenv").config();
const path = require("path");
const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views/layouts"));

app.use("",routes);
app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
