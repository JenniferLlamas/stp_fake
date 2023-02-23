const { res_registro_orden,res_cambio_estatus } = require('../diccionario/diccionario');


const axios  = require("axios")

const axiosSTP = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {'Content-Type': 'application/json'}
});



/**
 * @class TransaccionesController
 * @description Gestion de peticiones STP de Transacciones
 * */
class TransaccionesController {

    /**
    * @
    * @memberof TransaccionesController
    *
    * @function registraOrden
    * @description Registra una nueva orden
    * */
    registraOrden = async ({ body }, response) => {

        console.log(body)
        if (body.success)
            response.status(200).json({ id: '123456789123', descripcion: 'Exito' })
        else
            response.status(400).json({ id: (Math.floor(Math.random() * 7)), descripcion: res_registro_orden[Math.floor(Math.random() * 7)] })

    }


    /**
    * @
    * @memberof TransaccionesController
    *
    * @function cambioEstado
    * @description Notifica un cambio de estado en una orden
    * */
    cambioEstado = async ({ body }, response) => {

       axiosSTP.post('/stp/cambio',{
            "id": 12342912,
            "empresa": "string",
            "folioOrigen": "string",
            "estado": "LIQUIDADO", //LIQUIDADO, CANCELADO, DEVUELTO
            "causaDevolucion": res_cambio_estatus[Math.floor(Math.random() * 31)], //ID DE DEV, DESCRIPCION
            "tsLiquidacion": "1634919027297"
       })
       .then(res => {
            console.log("res", res.data);

       }).catch(error => {
            console.log("error", error);

       })

    }


    /**
    * @
    * @memberof TransaccionesController
    *
    * @function nuevoAbono
    * @description STP Notifica que se relizo un abono
    * */
    nuevoAbono = async ({ body }, response) => {

       axiosSTP.post('/stp/abono',{
             "id": 3191365,
             "fechaOperacion": 20200127,
             "institucionOrdenante": 846,
             "institucionBeneficiaria": 90646,
             "claveRastreo": "12345",
             "monto": 0.01,
             "nombreOrdenante": "STP",
             "tipoCuentaOrdenante": 40,
             "cuentaOrdenante": "846180000400000001",
             "rfcCurpOrdenante": "ND",
             "nombreBeneficiario": "NOMBRE_DE_BENEFICIARIO",
             "tipoCuentaBeneficiario": 40,
             "cuentaBeneficiario": "64618012340000000D",
             "nombreBeneficiario2": "NOMBRE_DE_BENEFICIARIO2",
             "tipoCuentaBeneficiario2": 40,
             "cuentaBeneficiario2": "64618012340000000D",
             "rfcCurpBeneficiario": "ND",
             "conceptoPago": "PRUEBA1",
             "referenciaNumerica": 1234567,
             "empresa": "NOMBRE_EMPRESA",
             "tipoPago":1,
             "tsLiquidacion": "1634919027297",
             "folioCodi": "f4c1111abd2b28a00abc"
       })
       .then(res => {
            console.log("res", res.data);

       }).catch(error => {
            console.log("error", error);

       })

    }
    

}


module.exports = TransaccionesController