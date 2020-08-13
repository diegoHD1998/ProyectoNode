'use strict'

var Usuario = require('../models/usuario')
const bcrypt = require('bcrypt-nodejs')
const jwt = require ('jsonwebtoken')

function Guardar(req, res){
    let usuario = new Usuario()
    usuario.correo = req.body.correo
    usuario.clave = req.body.clave

    usuario.save((err, UsuarioRegistrado)=>{
        if (err) return res.status(500).send({mensajeUser:"El usuario no pudo ser registrado"})
        res.status(200).send({usuarioRegistrado:UsuarioRegistrado})
    })
}

function Validar(req, res) {

    let email= req.body.correo;
    let password = req.body.clave;
  
  
    Usuario.findOne({correoUser:email}, (err, user) => {
        if (err) return res.status(500).send({ mensaje: 'error al realizar la peticion' })
        if (!user) return res.status(401).send({ mensaje: 'Error usuario no existe' })
  
  
        bcrypt.compare(password, user.passUser, function(error, isMatch) {
            if (error) {
                res.status(500).send(`Error al validar usuario> ${error}`)
            } else if (!isMatch) {
                res.status(401).send({ 'mensaje':'Clave incorrecto'})
            } else {
              var token = jwt.sign({user},'clave');
                res.status(200).send({ 'mensaje':'correcto','token':token})
            }
          })
    })
  
  
  
  
  }


module.exports = {
    Guardar,
    Validar
}