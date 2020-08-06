'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AlumnoSchema = Schema(
    {
        Nombre:String,
        Rut:String
    }
)

module.exports = mongoose.model('Alumnos',AlumnoSchema)