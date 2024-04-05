//step 1 -> server instantiate
const express = require('express');
const app = express();

//for postman
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//step 2 -> activate the server on port 3000
app.listen(3000 , () => {
    console.log("hello from port no. 3000")
});

//router  --  to show on chrome 
app.get('/' , (request,response) => {
    response.send("welcome to backend");
})

app.post('/api/cars',(request,response) => {
    //fetch from req. body
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully")
})

//connecting server with mongodb by mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection successful");
})
.catch((error) => {
    console.log("Connection error:",error);
});
// to check connection established or not terminal -> node server.js 