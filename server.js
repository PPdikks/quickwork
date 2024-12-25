const express= require('express')
const app=express()
const PORT=3009;
const add=require('./notes.js')

app.get('/',function(req,res){
    add.addNum(1,2)
    res.send('welcome to the page')
})

app.get('/hey',(req,res)=>{ // inline function as well 
    res.send('Hello bachalog')
})

app.listen(3009 ,()=>{
    console.log('The server is listening to PORT 3009')
})