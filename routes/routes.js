"use strict";
const express = require("express");
const contact = require("./libs/contact");
const home = require("./libs/home");
const router = express.Router();


router.use("/api", contact);
router.use("", home);
module.exports = router;
