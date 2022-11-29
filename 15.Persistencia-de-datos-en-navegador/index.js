const nombre = "Oscar"
const apellido = "Cogno"

const datos = {
   nombre,
   apellido
}

sessionStorage.setItem("datos", JSON.stringify(datos))
localStorage.setItem("datos", JSON.stringify(datos))

const caduca = new Date()
document.cookie = `datos =${JSON.stringify(datos)};expires=${new Date(caduca.getTime()+2 * 60000)}`