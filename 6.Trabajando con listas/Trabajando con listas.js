let compras = ["Fideos", "Arroz", " Pure de tomate", "Cafe", "Azucar"]
compras.push("Aceite de girasol")
compras.pop()

const peliculas_favoritas = [
    {
        Titulo : "Piratas del Caribe La maldición del perla negra",
        Director : "Gore Verbinski",
        Fecha : new Date(2003,7,17)
    },
    {
        Titulo : "The Avengers",
        Director : "Joss Whedon",
        Fecha : new Date(2012,4,26)
    },
    {
        Titulo : "Star Wars: Episodio VIII",
        Director :"Rian Johnson",
        Fecha : new Date(2017,12,14)
    },
];

const peliculas_posteriores =  peliculas_favoritas.filter(p => p.Fecha > new Date(2010, 0, 1))
const directores_original = peliculas_favoritas.map(p => {
    return p.Director})
const titulos_original = peliculas_favoritas.map(t => { return t.Titulo})
const directores_titulos = directores_original.concat(titulos_original)
const directores_titulos_propaga = [...directores_original, ...titulos_original]

console.log(compras)
console.log(peliculas_favoritas)
console.log(peliculas_posteriores)
console.log(directores_original)
console.log(titulos_original)
console.log(directores_titulos)
console.log(directores_titulos_propaga)