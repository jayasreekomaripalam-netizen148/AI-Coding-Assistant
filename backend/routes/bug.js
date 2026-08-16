const express = require("express");

const router = express.Router();


// Bug Fixer API

router.post("/", (req,res)=>{

    const {code} = req.body;


    let analysis = "";


    if(code.includes("print(")){

        analysis = "Code looks fine. Check indentation and syntax if errors appear.";

    }
    else if(code.includes("var")){

        analysis = "Consider using let or const instead of var in modern JavaScript.";

    }
    else{

        analysis = "Please check syntax, variables, and logic errors.";

    }


    res.json({

        submittedCode: code,
        suggestion: analysis

    });


});


module.exports = router;


