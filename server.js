const express = require('express')
const path = require("path");
const app = express()
const data = require('./devData.json')
const ejs = require('ejs')
app.use(express.static(__dirname +"/public"))
app.set('view engine', 'ejs')

app.get(['/'], function(req,res){
 res.render('index',{data:data})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)