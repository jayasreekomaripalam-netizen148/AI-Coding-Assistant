const express = require("express");

const router = express.Router();


// Temporary users storage
let users = [];


// Signup API
router.post("/signup", (req,res)=>{

    const {name,email,password} = req.body;


    users.push({
        name,
        email,
        password
    });


    res.json({
        message:"User registered successfully",
        user:{
            name,
            email
        }
    });

});


// Login API
router.post("/login",(req,res)=>{

    const {email,password}=req.body;


    const user = users.find(
        u => u.email === email && u.password === password
    );


    if(!user){

        return res.status(401).json({
            message:"Invalid credentials"
        });

    }


    res.json({
        message:"Login successful",
        user:{
            name:user.name,
            email:user.email
        }
    });

});


module.exports = router;

