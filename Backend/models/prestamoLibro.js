'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PrestamoSchema = Schema(
    {
        IdLibro: {type: Schema.ObjectId, ref: "Libros"},
        IdAlumno: {type: Schema.ObjectId, ref: "Alumnos"},
        FechaInicio: Date,
        FechaFinal:Date,
        FechaDevolucion:Date
    }
)

module.exports = mongoose.model('PrestamoLibro',PrestamoSchema)