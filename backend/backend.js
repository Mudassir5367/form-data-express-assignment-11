const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
 app.get('/',(req,res)=>{
    res.sendFile(__dirname,'../src/App.js')
 })

 app.post('/data',(req,res)=>{
    res.send(req.body)
 })

 app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
 })