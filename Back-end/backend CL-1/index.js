require('dotenv').config()  //from dotenv

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello', (req,res) => {
    res.send('hello vivek ')
})
app.get('/login',(req,res)=>{
    res.send('<h1>you entered in the login page</h1>')
})
app.get('/link',(req,res)=>{
    res.send('vivek kumar mishra')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})