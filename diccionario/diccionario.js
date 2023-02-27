
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

const actividades_economicas = {
    28: "SERVICIOS - PASARELA DE PAGOS ",
    29: "SERVICIOS - TURÍSTICOS ",
    30: "FINTECH - CROWDFOUNDING ",
    31: "FINTECH - WALLET ",
    32: "FINTECH - MONEDAS VIRTUALES ",
    33: "SERVICIOS - OUTSOURCING ",
    34: "MANUFACTURA ",
    35: "SOCIEDADES FINANCIERAS DE OBJETO MÚLTIPLE REGULADAS ",
    36: "SOCIEDADES FINANCIERAS DE OBJETO MÚLTIPLE NO REGULADAS ",
    37: "INSTITUCIONES FINANCIERAS DEL EXTRANJERO ",
    38: "SERVICIOS DE INSTITUCIONES DE CRÉDITO, ORGANIZACIONES AUXILIARES E INSTITUCIONES DE SEGUROS Y FIANZAS ",
    39: "SERVICIOS RELACIONADOS CON INMUEBLES ",
    40: "SERVICIOS PROFESIONALES Y TÉCNICOS ",
    41: "SERVICIOS DE BUFETES JURÍDICOS ",
    42: "SERVICIOS DE ANÁLISIS DE SISTEMAS Y PROCESAMIENTO ELECTRÓNICO DE DATOS ",
    43: "SERVICIOS DE AGENCIAS DE COLOCACIÓN Y SELECCIÓN DE PERSONAL ",
    44: "SERVICIOS MEDICO GENERAL Y ESPECIALIZADO EN CONSULTORIOS ",
    45: "ESTABLECIMIENTOS PRIVADOS DE INSTRUCCIÓN, EDUCACIÓN, CULTURA E INVESTIGACIÓN ",
    47: "SOCIEDADES DE AHORRO Y CRÉDITO POPULAR ",
    48: "SOCIEDADES DE INVERSIÓN ",
    49: "COMPRAVENTA DE GAS PARA USO DOMESTICO O COMERCIAL ",
    50: "CONTRATACIÓN DE OBRAS COMPLETAS DE CONSTRUCCIÓN (CASAS, DEPARTAMENTOS, INMUEBLES, PAVIMENTACIÓN, NO RESIDENCIALES, VÍAS DE COMUNICACIÓN) ",
    51: "SERVICIOS DE ENSEÑANZA PRE PRIMARIA Y PRIMARIA ",
    52: "SERVICIOS DE ENSEÑANZA SECUNDARIA ",
    53: "SERVICIOS DE ENSEÑANZA COMERCIAL Y DE IDIOMA ",
    54: "CASAS DE BOLSA NACIONALES 55 ADMINISTRACIÓN DE INMUEBLES ",
    56: "COMPAÑÍAS DE SEGUROS NACIONALES ",
    57: "CASA DE CAMBIO ",
    58: "CONSTRUCCIÓN DE INMUEBLES ",
    59: "COMPRAVENTA DE ARTÍCULOS DE PLATA ",
    60: "COMPRAVENTA DE OTRAS JOYAS ",
    61: "COMPRAVENTA DE RELOJES ",
    62: "SERVICIOS DE BLINDAJE ",
    63: "COMPRAVENTA DE AUTOMÓVILES Y CAMIONES NUEVOS ",
    64: "COMPRAVENTA DE CASAS Y OTROS INMUEBLES ",
    65: "TARJETA DE CRÉDITO ",
    66: "CENTROS CAMBIARIOS ",
    67: "AGENCIA ADUANAL ",
    68: "MONTEPIO O CASAS DE EMPEÑO ",
    69: "FACTORING ",
    70: "ADMINISTRADORAS DE TARJETA DE CRÉDITO ",
    71: "NOTARIAS PUBLICAS ",
    72: "EMPRESAS TRANSPORTADORAS DE VALORES ",
    73: "JUEGOS DE FERIA Y APUESTAS ",
    74: "TRANSMISORES DE DINERO O DISPERSORES",
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
    actividades_economicas,
    res_registro_orden,
    res_cambio_estatus
}