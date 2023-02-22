
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




module.exports = {
    res_alta_persona_fisica,
    res_alta_persona_moral,
}