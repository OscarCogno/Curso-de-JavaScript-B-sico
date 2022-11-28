import chalk from 'chalk'
import {suma,multiplica} from "./funciones/controller.js"

// const sum = suma(1,2)
// const sum1 = suma(4,5)

// const multipli = multiplica(sum,sum1)

const multipli = multiplica(suma(1,2),(suma(4,5)))
console.log(chalk.green(multipli))
