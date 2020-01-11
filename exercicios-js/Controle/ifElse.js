const imprimirResultado = function(nota) {
    if(nota == 10) {
        console.log('Aprovado com honras!')
    }
    else if (nota >= 7 && nota <= 10) {
        console.log('Aprovado!')
    }
    else if (nota <= 7 && nota >= 0){ 
        console.log('Reprovado')
    }
    else {
        console.log('Nota inválida')
    }
    }

    imprimirResultado(10)
    imprimirResultado(9)
    imprimirResultado(6)
    imprimirResultado(11)
    imprimirResultado(-1)
    imprimirResultado(0)
    //imprimirResultado('epaa!') cuidado, JS é fracamente tipada
