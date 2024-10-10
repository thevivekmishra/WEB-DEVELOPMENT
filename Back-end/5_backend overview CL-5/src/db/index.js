//this is second approach (writing code in another file and then import to the starting point) connection mongodb 

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; //dont use constants otherwise error will show 

const connectDB = async() => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    }

    catch(error) {
        console.log("Connectin failed",error)
        process.exit(1);
    }
}

export default connectDB