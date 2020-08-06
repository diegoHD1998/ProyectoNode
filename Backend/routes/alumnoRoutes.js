'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express')

// Cargamos el controlador
var libroController = require('../controllers/alumnoController')

// Llamamos al router
var api= express.Router()


// Creamos rutas

api.post('/guardar-A', libroController.Guardar)
api.get('/mostrar-A', libroController.Todos)
api.delete('/borrar-A/:id', libroController.Eliminar)
api.put('/actualizar-A/:id', libroController.Actualizar)

module.exports = api