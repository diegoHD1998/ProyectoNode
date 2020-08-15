'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express')

// Cargamos el controlador
var prestamoController = require('../controllers/prestamoLibroController')

// Llamamos al router
var api= express.Router()


// Creamos rutas

api.post('/guardar-P', prestamoController.guardarPrestamo)
api.get('/listar-P', prestamoController.listar)


module.exports = api