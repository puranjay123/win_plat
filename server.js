"use strict";
require("dotenv").config();
const path = require("path");
const express = require("express");
const routes = require("./routes/route");
const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views/layouts"));
app.get("",(req,res)=>{
    res.render("home")
})
app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
