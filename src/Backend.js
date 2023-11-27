const express = require('express')
const app = express()

app.use(express.json())
 app.get('/',(req,res)=>{
    res.sendFile(__dirname,'./App.js')
 })

 app.post('/data',(req,res)=>{
    
 })