    function distribuirCaracter() {
        let caracter = document.getElementById('entrada').value
        document.getElementById('entrada').value = ''


        caracter.trim()

        if (caracter == '1' || caracter == '2' || caracter == '3' || caracter == '4' || caracter == '5' || caracter == '6' || caracter == '7' || caracter == '8' || caracter == '9') {
            document.getElementById('numeros').value = caracter
        } else {
            document.getElementById('letras').value = caracter
        }

    }