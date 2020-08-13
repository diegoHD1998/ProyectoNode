'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express')

// Cargamos el controlador
var usuarioController = require('../controllers/usuarioController')

// Llamamos al router
var api = express.Router()


//Creamos rutas

api.post('/guardar-U', usuarioController.Guardar)
api.post('/validar-U', usuarioController.Validar)

module.exports = api