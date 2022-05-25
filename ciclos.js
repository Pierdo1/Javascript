let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5

let num = prompt(`Cual es el numero mas grande de los siguientes: ${num1} ${num2} ${num3} ${num4} ${num5}`)

switch (num) {
    case "1":
        console.log("Incorrecto, el numero mas grande es:", num5)
        break;
    case "2":
        console.log("Incorrecto, el numero mas grande es:", num5)
            break;
    case "3":
        console.log("Incorrecto, el numero mas grande es:", num5)
                break;
    case "4":
        console.log("Incorrecto, el numero mas grande es:", num5)
                    break;
    case "5":
        console.log("Correcto, el numero mas grande es:", num5)
                        break;
    default:
        if (num > 5) {
            console.warn('Ingrese un numero de la tabla')
        }
        if (num < 1) {
            console.warn('Ingrese un numero de la tabla')
        }
        if (num = '') {
            console.warn('Ingrese un numero de la tabla')
        }
}
