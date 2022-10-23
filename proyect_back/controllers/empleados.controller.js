const Empleado = require('../models/empleados.model');
let response = {
    msg: "",
    exito: false
}
// Create and Save a new Empleado
exports.create = function(req, res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })
    empleado.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Empleado guardado con éxito"
        res.json(response)
    })
}
exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err, empleado){
        res.json(empleado)
    })
}