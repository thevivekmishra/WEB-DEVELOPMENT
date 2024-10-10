const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//import routes
const blog = require("./routes/blog")
//mount
app.use("/api/v1",blog);

//import databsase
const connectWithDb = require("./config/database");
connectWithDb(); //call

//default routes
app.get("/",(req,res) => {
    res.send(`<h1>Hello vivek...</h1>`)
})

//start the server
app.listen(PORT , () => {
    console.log(`App is running at PORT no: ${PORT}`)
})

