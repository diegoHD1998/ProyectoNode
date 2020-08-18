'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema
const UsuarioSchema = Schema(
    {
        nombre:String,
        apellido:String,
        correo:String,
        clave:String
    }
)

UsuarioSchema.pre('save',function(next){
    const usuario = this;
    if(!usuario.isModified('clave')){
      return next();
    }

  bcrypt.genSalt(10,(err,salt)=> {
    if(err){
      next(err);
    }
    bcrypt.hash(usuario.clave,salt,null,(err,hash)=>{
      if(err){
        next(err);
      }
      usuario.clave = hash;
      next();

    })
  })
})


module.exports = mongoose.model('Usuarios',UsuarioSchema)