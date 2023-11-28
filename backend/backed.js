const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const arr = []; 
app.use(express.json())
app.use(cors())
 app.get('/',(req,res)=>{
    res.send(arr)
 })

 app.post('/form',(req,res)=>{
    res.send('form')
    console.log(req.body)
    arr.push(req.body)
 })

 app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
 })