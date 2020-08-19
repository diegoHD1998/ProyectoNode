'use strict'

var Libro = require('../models/libro')

function Guardar(req, res){
    
    let libro = new Libro()
    libro.TituloLibro = req.body.TituloLibro
    libro.IdLibro=req.body.IdLibro
    libro.Autor=req.body.Autor
    libro.Idioma=req.body.Idioma

    libro.save((err, LibroGuardado)=>{
        if (err) return res.status(500).send({mensaje1:"El libro no pudo ser registrado"})

        res.status(200).send({libroInsertado: LibroGuardado})
    })

    
}

function Todos(req, res){
    Libro.find({},(err, libro)=>{
        if (err) return res.status(500).send({mensaje:'error al realizar la peticion'})
        if(!libro) return res.status(404).send({mensaje:'Error el libro no existe'})

        res.status(200).send({libro: libro})
    })
}

function Eliminar(req, res){
    let idLibro1 = req.params.IdLibro
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
    let update = {
        TituloLibro: req.body.titulo,
        IdLibro: req.body.titulo,
        Autor: req.body.titulo,
        Idioma: req.body.titulo
    }

    Libro.findByIdAndUpdate(idLibro2,update, (err, libroActualizado)=>{
        if (err) return res.status(500).send({mensaje:'error al actualizar el libro'})
        res.status(200).send({
            mensaje:'Los datos del Libro han sido actualizados exitosamente',
            libro:libroActualizado})

    })
}

function buscarAND(req,res){
    let Id = req.body.codigo
    let Titulo = req.body.titulo

    Libro.find({IdLibro:Id, TituloLibro: Titulo},(err, libro)=>{
        if(!libro) return res.status(404).send({mensaje:'Error el libro no exixte'})
        res.status(200).send({libro})

    })
}


module.exports = {
    Guardar,
    Todos,
    Eliminar,
    Actualizar,
    buscarAND
}

