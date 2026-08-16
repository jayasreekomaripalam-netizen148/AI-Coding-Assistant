const express = require("express");

const router = express.Router();


// AI Chat API (temporary response)

router.post("/", (req,res)=>{

    const {message} = req.body;


    let reply = "";


    if(message.toLowerCase().includes("python")){

        reply = "Python is a popular programming language used for AI, web development, and automation.";

    }
    else if(message.toLowerCase().includes("javascript")){

        reply = "JavaScript is used to build interactive websites and backend applications.";

    }
    else{

        reply = "I am your AI Coding Assistant. I will help you with programming questions.";

    }


    res.json({

        userMessage: message,
        aiResponse: reply

    });


});


module.exports = router;

