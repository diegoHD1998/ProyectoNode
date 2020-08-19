'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express')

// Cargamos el controlador
var libroController = require('../controllers/libroController')

// Llamamos al router
var api= express.Router()


// Creamos rutas

api.post('/guardar', libroController.Guardar)
api.get('/mostrar', libroController.Todos)
api.post('/buscarAnd',libroController.buscarAND)
api.delete('/borrar/:id', libroController.Eliminar)
api.put('/actualizar/:id', libroController.Actualizar)

module.exports = api