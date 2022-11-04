const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoviosSchema = new Schema({
    id_novio:{type:String, required:true, max:60},
    nombre:{type:String, required:true, max:60},
    cuidad:{type:String, required:true, max:60},
    estatura:{type:Number, required:true, max:300},
    telefono:{type:String, required:true, max:15},
    contextura:{type:String, required:true, max:60},
    direccion:{type:String, required:true, max:60},
    edad:{type:Number, required:true, max:150},
});

module.exports = mongoose.model("novios", NoviosSchema); 