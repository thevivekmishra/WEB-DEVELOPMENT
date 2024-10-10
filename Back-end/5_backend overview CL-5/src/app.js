import express  from "express";
import cors from "cors";
import cookiesparser from cookiesparser;
const app = express()

app.use(cors({
    origin:process.origin.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"))
app.use(cookiesparser())

export {app}