function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
    else {
        console.log('Reprovado com ' + nota)
    }
}
soBoaNoticia(8.9)
soBoaNoticia(7.0)
soBoaNoticia(6.9)

function teste_jovem(idade){
    if (idade <= 10) {
    console.log('Você é criança, sua idade é de apenas ' + idade + ' anos')
    }
    else if (idade <= 12) {
        console.log('Você é um mero pré-adolescente, sua idade é de apenas ' + idade + ' anos')
    }
    else if (idade <= 17){
        console.log('Você é um adolescente, sua idade é de apenas ' + idade + ' anos')
    }
    else if (idade <= 30) {
        console.log('Você é um jovem adulto! Sua idade é de ' + idade + ' anos')
    }
    else if (idade <= 55) {
        console.log('Você adulto! Sua idade é de ' + idade)
    }
    else if (idade <= 80) {
        console.log('Você é uma pessoa Idosa! Você tem incríveis ' + idade + ' anos')
    }
    else {
        console.log('Parabéns pela sua saúde! De forma impressionante você tem ' + idade + ' anos')
    }
}

teste_jovem(8)
teste_jovem(12)
teste_jovem(15)
teste_jovem(20)
teste_jovem(50)
teste_jovem(67)
teste_jovem(92)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
