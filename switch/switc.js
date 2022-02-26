/*var parametro = 1

switch (parametro) {

    case 1:
        document.write('parametro 1')
        breack

    case 2:
        document.write('parametro 2')
        breack

    default:
        document.write('default')

}*/

//operadores

var num1 = prompt('digite seu numero')
var num2 = prompt('digite seu numero')

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write(' A soma ' + num1 + ' mais ' + num2 + ' e  : ' + (num1 + num2) + ' <br/>')
document.write(' A subtraçao ' + num1 + ' mais ' + num2 + ' e  : ' + (num1 - num2) + ' <br/>')
document.write(' A multiplicao ' + num1 + ' mais ' + num2 + ' e  : ' + (num1 * num2) + ' <br/>')
document.write(' A divisao ' + num1 + ' mais ' + num2 + ' e  : ' + (num1 / num2) + ' <br/>')
document.write(' O resto da divisao ' + num1 + ' mais ' + num2 + ' e  : ' + (num1 % num2) + ' <br/>')


/*==========================================*/
var teste = 10

teste += 5
document.write(teste)
teste -= 5
document.write(teste)
teste *= 5
document.write(teste)
teste /= 5
document.write(teste)