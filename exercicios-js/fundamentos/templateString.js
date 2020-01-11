const nome = 'Thiago'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá,
 ${nome}!`
 console.log(concatenacao, template)

 // Expressões numéricas

 console.log(`1 + 1 =  ${1 + 1}`)

 //   Logo abaixo são funções Arrow

 const up = texto => texto.toUpperCase()
 console.log(`Eii... ${up('isso é uma demonstração de arrow')}!`)