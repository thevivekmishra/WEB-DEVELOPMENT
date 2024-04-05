const express = require("express");
const app = express();

// Load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware needed to parse the json req
app.use(express.json());

// Import routes from todo api
const todoRoutes = require("./routes/todos");
// Mount the todo api
app.use("/api/v1", todoRoutes);

// Connect to database
const dbConnect = require("./config/database");
dbConnect();

// Default router
app.get("/", (req, res) => {
    res.send(`<h1>"Hello Vivek...</h1>`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at port no ${PORT}`);
});
