const datos = {
    nombre : "Oscar",
    apellido : "Cogno",
    edad : 40,
    altura : 185,
    eresDesarrollador : true
}

const edad = datos.edad
const lista = [{
    ...datos
},
{
    nombre : "Ariel",
    apellido : "Delprato",
    edad : 34,
    altura : 190,
    eresDesarrollador : false
},
{
    nombre : "Manuel",
    apellido : "Galeano",
    edad : 36,
    altura : 170,
    eresDesarrollador : false 
}]

const listaOrdenada = lista.sort((a,b) => b.edad - a.edad)


console.log(listaOrdenada)