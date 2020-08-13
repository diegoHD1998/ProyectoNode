'use strict'

var Libro = require('../models/libro')

function Guardar(req, res){
    
    let libro = new Libro()
    libro.TituloLibro = req.body.TituloLibro
    libro.IdLibro=req.body.IdLibro
    libro.Autor=req.body.Autor
    libro.Idioma=req.body.Idioma

    libro.save((err, LibroGuardado)=>{
        if (err) return res.status(500).send({mensaje1:"Error fatal "})

        res.status(200).send({libroInsertado: LibroGuardado})
    })

    
}

function Todos(req, res){
    Libro.find({},(err, libro)=>{
        if (err) return res.status(500).send({mensaje:'error al realizar la peticion'})
        if(!libro) return res.status(404).send({mensaje:'Error el libro no existe'})

        res.status(200).send({libro})
    })
}

function Eliminar(req, res){
    let idLibro1 = req.params.id
    Libro.findById(idLibro1,(err, libro)=>{
        if (err) return res.status(500).send({mensaje:'error al borrar el libro'})
        libro.remove(err=>{
            if (err) return res.status(500).send({mensaje:'error al borrar el libro'})
            res.status(200).send({mensage:"El libro fue eliminado"})
        })
    })
}

function Actualizar(req, res){
    let idLibro2 = req.params.id
    let update = req.body

    Libro.findByIdAndUpdate(idLibro2,update, (err, libroActualizado)=>{
        if (err) return res.status(500).send({mensaje:'error al actualizar el libro'})
        res.status(200).send({libroActualizado})

    })
}


module.exports = {
    Guardar,
    Todos,
    Eliminar,
    Actualizar
}

