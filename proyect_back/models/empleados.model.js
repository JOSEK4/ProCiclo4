const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
    nombre:{type:String, required:true, max:60},
    apellido_p:{type:String, required:true, max:60},
    apellido_m:{type:String, required:true, max:60},
    telefono:{type:String, required:true, max:15},
    mail:{type:String, required:true, max:60},
    direccion:{type:String, required:true, max:60},
});

module.exports = mongoose.model("empleado", EmpleadoSchema); 