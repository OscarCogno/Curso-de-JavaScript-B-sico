function sin_parametros(){
    return true
}

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"),5000)
}

function* generapares(){
    let id = 0;
    while(true){
        yield id +=2
    }
}

const sp = sin_parametros()
console.log(sp)

promesa();

const gene = generapares()
console.log(gene.next().value)
console.log(gene.next().value)
console.log(gene.next().value)
console.log(gene.next().value)
 
