const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


// Middleware

app.use(cors());
app.use(express.json());


// Routes

const chatRoutes = require("./routes/chat");
const codeRoutes = require("./routes/code");
const bugRoutes = require("./routes/bug");
const uploadRoutes = require("./routes/upload");
const authRoutes = require("./routes/auth");


app.use("/api/chat", chatRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/bug", bugRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);


// Health check

app.get("/", (req, res) => {

    res.json({
        message: "AI Coding Assistant Backend Running 🚀"
    });

});


// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
