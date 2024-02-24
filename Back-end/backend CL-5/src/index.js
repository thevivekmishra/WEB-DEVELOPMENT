// as early as possible in your application import dotenv

//1st method -
// require ('dotenv').config({path:'./env'})

//2nd method- (also change scripts in package.json 
// "dev":nodemon -r dotenv/config --exprimental-json-modules src/index.js)
import dotenv from "dotenv"
dotenv.config({path:'./env'})  

import connectDB from './db/index.js'
connectDB()

.then(() => {
app.listen(process.env.PORT || 8000,() => {
    console.log(`server is running at port no ${process.env.PORT}`)
})
})
.catch((err) => {
    console.log("Mongodb connection failed",err);
})










// //first approach (write all the code in the starting file) to connect database with mongodb 

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// (async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGOdB_URL}/${DB_NAME}`)
        
//         //if app not respond
//         app.on("error",(error) => {
//             console.log("ERROR",error);
//             throw error;
//         })
        
//         //if app connect
//         app.listen(process.env.PORT,() => {
//         console.log(`App is litening on port ${process.env.PORT}`)}
//         )
//     }
//     catch(error){
//         console.error("error",error)
//         throw error
//     }
// })
