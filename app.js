const express = require("express")
require('dotenv').config()
const googleFinance = require('google-finance');
const app = express()
const port = process.env.PORT

const date = new Date();
const [month, day, year] = [date.getMonth()+1, date.getDate(), date.getFullYear()];


app.get('/',(req,res)=>{

    res.send(`<h1>${day}-${month}-${year}</h1>`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})  
