'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LibroSchema = Schema(
    {
        TituloLibro:String,
        IdLibro:String,// cambiar esto
        Autor:String,
        Idioma:String

    }
)

module.exports = mongoose.model('Libros',LibroSchema)