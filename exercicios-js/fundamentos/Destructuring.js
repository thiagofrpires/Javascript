//Novo recurso do JS2015

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Pires',
    idade: 23,
    altura: 1.65,
    peso: 67,
    endereco: {
        rua: 'Rua Caibar Schutel',
        numero: 299,
    }

}

const { nome, idade, sobrenome} = pessoa
console.log(nome, sobrenome, idade)

const { caracteristica, habilidade = true} = pessoa
console.log(caracteristica, habilidade)


const { endereco:{ rua, numero, cep} } = pessoa
console.log(rua, numero, cep)

//const{ conta:{ ag, num } } = pessoa
//console.log(ag, num) Dará erro 