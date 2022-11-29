let str_Nombre = "Oscar"
let str_Apellido = 'Cogno'
let estudiante = str_Nombre.concat(` `, str_Apellido)
let estudianteMayus = estudiante.toLocaleUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()
let str_cant = estudiante.length
let str_PLNombre = str_Nombre[0]
let str_ULApellido = str_Apellido.substring(str_Apellido.length - 1, str_Apellido.length)
let str_SinEspacio = estudiante.split(" ").join("")
let esta = estudiante.includes(str_Nombre)

console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(str_cant)
console.log(str_PLNombre)
console.log(str_ULApellido)
console.log(str_SinEspacio)
console.log(esta)