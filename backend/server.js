const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const chatRoutes = require("./routes/chat");

app.use("/api/chat", chatRoutes);
app.use(cors());
app.use(express.json());
const codeRoutes = require("./routes/code");

app.use("/api/code", codeRoutes);
const bugRoutes = require("./routes/bug");

app.use("/api/bug", bugRoutes);

const uploadRoutes = require("./routes/upload");

app.use("/api/upload", uploadRoutes);

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);
app.get("/", (req,res)=>{

    res.json({
        message:"AI Coding Assistant Backend Running 🚀"
    });

});


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});
