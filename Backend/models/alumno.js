'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AlumnoSchema = Schema(
    {
        Nombre:String,
        Rut:{
            type:String,
            unique:true,
            required:true
        }
    }
)

module.exports = mongoose.model('Alumnos',AlumnoSchema)