var numero1 = prompt('digite seu numero')
var operacao = prompt('digite a operação desejada')
var numero2 = prompt('digite seu segundo numero')



function cal(numero1, numero2, operacao) {

    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)

    var resultado = 0


    if (operacao == 'soma') {

        resultado = numero1 + numero2
    }
    if (operacao == 'subtracao') {

        resultado = numero1 - numero2
    }
    if (operacao == 'multiplicacao ') {

        resultado = numero1 * numero2

    }
    if (operacao == 'divisao') {


        resultado = numero1 / numero2
    }

}

document.write(cal)