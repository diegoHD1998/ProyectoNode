'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(5000,()=>{
    console.log("Funcionando en Puerto 5000")
})

/* mongoose.connect('',(err, res) =>{

    if(err){
        console.log(err)
    }else{
        app.listen(5000, () => {
            console.log("Funcionando en Puerto 5000")
        })
    }

})  */