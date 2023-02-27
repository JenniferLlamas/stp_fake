const express = require('express')
const TransaccionesController = require('../app/TransaccionesController')
const router = express.Router()

let transaccionesController = new TransaccionesController()

module.exports = router
    .put('/speiws/rest/ordenPago/registra'          , transaccionesController.registraOrden)

    .get('/cambio-estado'          , transaccionesController.cambioEstado)

    .get('/abono-cobranza'          , transaccionesController.nuevoAbono)
    
