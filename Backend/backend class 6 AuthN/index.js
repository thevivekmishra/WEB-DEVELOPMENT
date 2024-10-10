const express = require("express")
const app = express();

require('dotenv').config(); 
const PORT = process.env.PORT || 4000 

//middleware
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//import database from config 
const connectWithDb = require("./config/database")
connectWithDb();

//import routes and mount
const user = require("./routes/user");
app.use("/api/v1",user);

//default routes
app.get("/",(req,res)=>{
    res.send("<h1>Hello vivek from authN & authZ class...</h1>")
})

app.listen(PORT,()=>{
    console.log(`App is running at port no: ${PORT}`);
})

