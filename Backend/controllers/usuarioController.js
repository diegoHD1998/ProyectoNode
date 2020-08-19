'use strict'

var Usuario = require('../models/usuario')
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt-nodejs')
const jwt = require ('jsonwebtoken')

function Guardar(req, res){
    let usuario = new Usuario()
    usuario.nombre = req.body.nombre
    usuario.apellido = req.body.apellido
    usuario.correo = req.body.correo
    usuario.clave = req.body.clave


    
    usuario.save((err, UsuarioRegistrado)=>{
        if (err) return res.status(500).send({mensajeUser:"El usuario no pudo ser registrado"})
        res.status(200).send({usuarioRegistrado:UsuarioRegistrado})
    })

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "biblioteca202001@gmail.com",
        pass: "biblioteca12345",
      },
    });

    var mensaje =
      "Usted a sido registrado como nuevo usuario de Biblioteca UBB";

    var mailOptions = {
      from: "biblioteca202001@gmail.com",
      to: usuario.correo,
      subject: "Credenciales Biblioteca UBB",
      text: mensaje,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
}

function Validar(req, res) {

    let email= req.body.correo;
    let password = req.body.clave;
  
  
    Usuario.findOne({correo:email}, (err, user) => {
        if (err) return res.status(500).send({ mensaje: 'error al realizar la peticion' })
        if (!user) return res.status(401).send({ mensaje: 'Error usuario no existe' })
  
  
        bcrypt.compare(password, user.clave, function(error, isMatch) {
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