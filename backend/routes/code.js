const express = require("express");

const router = express.Router();


// Code Generator API

router.post("/", (req,res)=>{

    const {prompt} = req.body;


    let code = "";


    if(prompt.toLowerCase().includes("calculator")){

        code = 
`def add(a,b):
    return a+b

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print(add(num1,num2))`;

    }

    else if(prompt.toLowerCase().includes("hello")){

        code =
`print("Hello World")`;

    }

    else{

        code =
`# Generated code will appear here
# Request: ${prompt}`;

    }


    res.json({

        request: prompt,
        generatedCode: code

    });


});


module.exports = router;

