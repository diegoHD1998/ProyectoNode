'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


var libro_routes = require('./routes/libroRoutes')

app.use('/api',libro_routes)



mongoose.connect('mongodb+srv://DiegoMunoz:colocolo11@cluster0-gonmb.mongodb.net/Proyecto?retryWrites=true&w=majority',(err, res) =>{

    if(err){
        console.log(err)
    }else{
        app.listen(5000, () => {
            console.log("Funcionando en Puerto 5000")
        })
    }

})  