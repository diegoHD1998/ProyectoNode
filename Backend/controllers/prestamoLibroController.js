var PrestamoLibro = require('../models/prestamoLibro')

function guardarPrestamo(req,res){
    let prestamo = new PrestamoLibro()
    prestamo.IdLibro = req.body.libro
    prestamo.IdAlumno = req.body.alumno
    prestamo.FechaInicio = req.body.FechaInicio
    prestamo.FechaFinal = req.body.FechaFinal
    prestamo.FechaDevolucion = req.body.FechaDevolucion

    prestamo.save((err,prestamolibro) => {
        res.status(200).send({registroInsertado: prestamolibro})
    })
}

function listar(req,res){
    PrestamoLibro.find()
     .populate('IdLibro')
     .populate('IdAlumno')
      .exec((err, Prestamo) => {
          if(err){
              res.status(500).send({err})
          }
       res.status(200).send({ Prestamo })
     })
 }


module.exports = {
    guardarPrestamo,
    listar
}