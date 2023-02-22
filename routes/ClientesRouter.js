const express = require('express')
const ClientesController = require('../app/ClientesController')
const router = express.Router()

let clientesController = new ClientesController()

module.exports = router
    .get('/stp-cliente'          , clientesController.getCliente)
    .get('/stp-cuenta'           , clientesController.getCuenta)
    .get('/stp-cuenta'           , clientesController.getCuenta)
    .get('/stp-clientes'         , clientesController.listClientes)
    .put('/stp-cliente-add'     , clientesController.registraCuenta)
    .put('/stp-cliente-update'   , clientesController.updateCliente)
    .delete('/stp-cliente-delete', clientesController.deleteCliente)
    .put('/stp-cliente-add-multiple',clientesController.registroMultiple)
