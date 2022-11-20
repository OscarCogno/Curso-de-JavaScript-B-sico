const Fecha_hoy =  new Date()
const Fecha_Nacimiento = new Date(1982,5,20)

const comparacion = Fecha_hoy > Fecha_Nacimiento
const dia_Nacimiento = Fecha_Nacimiento.getDate()
const mes_Nacimiento = Fecha_Nacimiento.getMonth() + 1
const anyo_Nacimiento = Fecha_Nacimiento.getFullYear()

console.log(Fecha_hoy)
console.log(Fecha_Nacimiento)
console.log(comparacion)
console.log(dia_Nacimiento)
console.log(mes_Nacimiento)
console.log(anyo_Nacimiento)