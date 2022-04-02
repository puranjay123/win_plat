const express = require("express");
const {sendContactMail} = require("../../configs/nodemailerConfigs")
const { getTemplate } = require("../../templates/gen-contact");
const router = express.Router();

router.post("/contact-us",async (req,res)=>{
    try {
         const { name, email, subject, message } = req.body;
         let html = getTemplate(name, email, message);
         let to = "rjqwer47@gmail.com"
         await sendContactMail(to,subject,subject,html);
         return res.status(200).json({
             msg:"Mail sent!",
             status:true,
         })
    } catch (error) {
        console.log("Can't send mail ",error.message);
       return  res.status(500).json({
            msg:"Mail cannot be sent",
            status:false,
        })
    }  
});
module.exports = router;
