import chalk from "chalk"
import {suma, multiplica} from "./funciones/controller.js"

const multipli = multiplica(suma(1,2),(suma(4,5)))

console.log(chalk.green(multipli))