const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleados.controller');

router.post('/', empleadoController.create);
router.get('/', empleadoController.find);
router.get('/:id', empleadoController.findOne);
module.exports = router;

