const express = require("express");
const router = express.Router();

router.post("/contact",(req,res)=>{
    console.log(req.body);
    res.send("OK");
})
module.exports = router;
