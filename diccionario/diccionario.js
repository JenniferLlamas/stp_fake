
const res_alta_persona_fisica = {
    0: " Cuenta en Revisión",
    1: "Firma invalida(En caso de retornar la Cuenta Clabe hay un error en el RFC / CURP o Cuenta)",
    2: "Excede 100 cuentas del lote que manda ",
    3: "Cuenta duplicada",
    4: "El campo PaisNacimiento obligatorio ",
    5: "El campo Apellido materno obligatorio",
    6: "El campo fecha de nacimiento es obligatorio",
    7: "Otros(Validaciones de PLD)",
}


const res_alta_persona_moral = {
    1: "Firma Inválida",
    2: "Límite de 100 cuentas superado",
    3: "Cuenta Duplicada ",
    4: "RFC o CURP o Identificación Fiscal Obligatoria",
    5: "Nombre Obligatorio",
    6: "Empresa Obligatoria",
    7: "País Obligatorio",
    8: "Fecha Constitución Obligatoria",
    9: "Otros (Validaciones de PLD)",
}


const res_registro_orden = {
    0: "Otros",
    1: "Dato Obligatorio",
    2: "Dato No Catalogado",
    3: "La cuenta No Pertenece a la Empresa",
    4: "Cuenta invalida",
    5: "Dato Duplicado",
    6: "Cuenta No Asociada",
    7: "Cuenta No Habilitada",
    8: "Rfc_Curp Inválido",
}

const res_cambio_estatus = {
    0: "Otros",
    1: "Cuenta inexistente",
    2: "Cuenta bloqueada",
    3: "Cuenta cancelada",
    4: "Cuenta invalida",
    5: "Cuenta en otra divisa",
    6: "Cuenta no pertenece al Participante Receptor",
    13: "Beneficiario no reconoce el pago",
    14: "Falta información mandatorio para completar el pago",
    15: "Tipo de pago erróneo",
    16: "Tipo de operación errónea",
    17: "Tipo de cuenta no corresponde",
    18: "A solicitud del emisor",
    19: "Carácter inválido",
    20: "Excede el límite de saldo autorizado de la cuenta",
    21: "Excede el límite de abonos permitidos en el mes en la cuenta",
    22: "Número de línea de telefonía móvil no registrado",
    23: "Cuenta adicional no recibe pagos que no proceden de Banxico",
    24: "Estructura de la información adicional incorrecta",
    25: "Falta instrucción para dispersar recursos de clientes por alcanzar límite al saldo",
    26: "Resolución resultante del Convenio de Colaboración para la Protección del Cliente Emisor",
    27: "Pago opcional no aceptado por el Participante Receptor",
    28: "Tipo de pago Codi sin notificación de abono en tiempo reducido",
    30: "Clave de rastreo repetida por Participante Emisor y día de operación",
    31: "Certificado del Participante Emisor Vencido"
}




module.exports = {
    res_alta_persona_fisica,
    res_alta_persona_moral,
    res_registro_orden,
    res_cambio_estatus
}