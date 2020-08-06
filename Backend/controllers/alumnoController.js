'use strict'

var Alumno = require('../models/alumno')

function Guardar(req, res){

    let alumno = new Alumno()
    alumno.Nombre = req.body.Nombre
    alumno.Rut=req.body.Rut
    

    alumno.save((err, AlumnoGuardado)=>{
        if (err) res.status(500).send(`Error base de datos ${err}`)
        res.status(200).send({alumnoRegistrado: AlumnoGuardado})
    })
}

function Todos(req, res){
    Alumno.find({},(err, alumno)=>{
        if (err) return res.status(500).send({mensaje:'error al realizar la peticion'})
        if(!alumno) return res.status(404).send({mensaje:'Error el alumno no existe'})

        res.status(200).send({alumno})
    })
}

function Eliminar(req, res){
    let rut1 = req.params.id
    Alumno.findById(rut1,(err, alumno)=>{
        if (err) return res.status(500).send({mensaje:'error al borrar al alumno'})
        alumno.remove(err=>{
            if (err) return res.status(500).send({mensaje:'error al borrar al alumno'})
            res.status(200).send({mensage:"El alumno fue eliminado"})
        })
    })
}

function Actualizar(req, res){
    let rut2 = req.params.id
    let update = req.body

    Alumno.findByIdAndUpdate(rut2,update, (err, alumnoActualizado)=>{
        if (err) return res.status(500).send({mensaje:'error al actualizar al alumno'})
        res.status(200).send({alumnoActualizado})

    })
}


module.exports = {
    Guardar,
    Todos,
    Eliminar,
    Actualizar
}
