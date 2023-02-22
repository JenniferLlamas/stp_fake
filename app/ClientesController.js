const { res_alta_persona_fisica, res_alta_persona_moral } = require('../diccionario/diccionario');

/**
 * @class ClientesController
 * @description Gestion de peticiones STP de Clientes
 * */
class ClientesController {

    /**
    * @
    * @memberof ClientesController
    *
    * @function add
    * @description Agregar un cliente
    * */
    registraCuenta = async ({ body }, response) => {

        console.log(body)
        if (body.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })
        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_alta_persona_fisica[Math.floor(Math.random() * 7)] })


    }

    /**
    * @
    * @memberof ClientesController
    *
    * @function update
    * @description Actualiza la informacion de un cliente
    *
    * */
    updateCliente = async ({ body }, response) => {
        console.log(body)

        if (body.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })
        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_alta_persona_fisica[Math.floor(Math.random() * 7)] })

    }

    /**
    * @
    * @memberof ClientesController
    *
    * @function list
    * @description Lista todos los Clientes registrados.
    * */
    listClientes = async ({ body }, response) => {
        console.log(body)

        if (body.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })
        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_alta_persona_fisica[Math.floor(Math.random() * 7)] })

    };


    /**
     * @
     * @memberof ClientesController
     *
     * @function delete
     * @description Elimina un cliente
     * */
    deleteCliente = async ({ query }, response) => {
        console.log(query)

        if (query.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })

        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_alta_persona_fisica[Math.floor(Math.random() * 7)] })

    }

    /**
     * @
     * @memberof ClientesController
     *
     * @function get
     * @description Obtiene la información de un cliente.
     * */
    getCliente = async ({ params }, response) => {
        console.log(params)

        if (params.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })
        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_alta_persona_fisica[Math.floor(Math.random() * 7)] })

    }

    /**
    * @
    * @memberof ClientesController
    *
    * @function get
    * @description Obtiene la información de un cliente.
    * */
    getCuenta = async ({ params }, response) => {
        console.log(params)

        if (params.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })
        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_alta_persona_fisica[Math.floor(Math.random() * 7)] })

    }



    /**
     *
     *
     * @memberof ClientesController
     * @fuction notificacionEstadoCuenta
     * @descripcion Envia una notificacion al ws del estatus de la cuenta
     */
    notificacionEstadoCuenta = (request, response) => {

        let params = {
            cuenta: '',
            empresa: '',
            estado: 'A',
            observaciones: 'descripcion del estado de la cuenta'
        }

        console.log(params)
        response.status(200).json({ mensaje: 'recibido' })
    }




    /**
     *
     *
     * @memberof ClientesController
     * @function registroMultiple
     * @description Alta de multiples cuentas
     */
    registroMultiple = ({ body }, response) => {
        console.log(body)
        if (body.success)
            response.status(200).json({ id: 0, descripcion: res_alta_persona_fisica[0] })
        else
            response.status(400).json({ id: 2, descripcion: res_alta_persona_fisica[2] })


    }

}


module.exports = ClientesController