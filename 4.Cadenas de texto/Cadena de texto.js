let str_Nombre = "Oscar";
let str_Apellido = "Cogno";
let str_estudiante = str_Nombre.concat(" ", str_Apellido);
let str_estudianteMayus = str_estudiante.toLocaleUpperCase();
let str_estudianteMinus = str_estudiante.toLocaleLowerCase();
let str_cant = str_estudiante.length;
let str_PLNombre = str_Nombre[0];
let str_ULApellido = str_Apellido[4];
let str_SinEspacio = str_estudiante.split(" ").join("");


console.log(str_estudiante)
console.log(str_estudianteMayus)
console.log(str_estudianteMinus)
console.log(str_cant)
console.log(str_PLNombre)
console.log(str_ULApellido)
console.log(str_SinEspacio)
console.log(str_estudiante.includes("Oscar"))