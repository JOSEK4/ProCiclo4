const Novio = require('../models/novios.model');
let response = {
    msg: "",
    exito: false
}
// Create and Save a new Novios
exports.create = function(req, res){
    let novio = new Novio({
        id_novio: req.body.id_novio,
        nombre: req.body.nombre,
        cuidad: req.body.cuidad,
        estatura: req.body.estatura,
        telefono: req.body.telefono,
        contextura: req.body.contextura,
        direccion: req.body.direccion,
        edad: req.body.edad

    })
    novio.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "novio guardado con éxito"
        res.json(response)
    })
}
exports.find = function(req,res){
    Novio.find(function(err, novios){
        res.json(novios)
    })
}

exports.findOne = function(req,res){
    Novio.findOne({_id: req.params.id},function(err, novio){
        res.json(novio)
    })
}
exports.update = function(req,res){
    let novio = {
        id_novio: req.body.novio,
        nombre: req.body.nombre,
        cuidad: req.body.cuidad,
        estatura: req.body.estatura,
        telefono: req.body.telefono,
        contextura: req.body.contextura,
        direccion: req.body.direccion,
        edad: req.body.edad
    }
    Novio.findByIdAndUpdate(req.params.id, {$set: novio}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al actualizar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "novio actualizado con éxito"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Novio.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "novio eliminado con éxito"
        res.json(response)
    })
}