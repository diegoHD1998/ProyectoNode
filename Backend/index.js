'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

var cors = require('cors')
app.use(cors())
app.options('*', cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


var libro_routes = require('./routes/libroRoutes')
var alumno_routes = require('./routes/alumnoRoutes')
var usuario_routes = require('./routes/usuarioRoute')

app.use('/api',libro_routes)
app.use('/api',alumno_routes)
app.use('/api',usuario_routes)





mongoose.connect('mongodb+srv://DiegoMunoz:colocolo11@cluster0-gonmb.mongodb.net/Proyecto?retryWrites=true&w=majority',(err, res) =>{

    if(err){
        console.log(err)
    }else{
        app.listen(5000, () => {
            console.log("Funcionando en Puerto 5000")
        })
    }

})  