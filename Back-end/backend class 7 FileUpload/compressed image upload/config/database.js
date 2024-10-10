const mongoose = require("mongoose")
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Databse connected successfully!!!"))
        .catch((error) => {
            console.log(error);
            console.log("Database connection failed")
            process.exit(1);
        })
}

