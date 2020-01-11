const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.244
const avaliacao2 = 7.398

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Para reduzir as casas decimais
console.log(media.toString()) // Para voltar a ter as casas decimais (String)
console.log(media.toString(2)) // Versão com códigos binários
console.log(typeof media) // Para identificar a váriável/Constante
console.log(typeof Number) // Tipo do dado (Função)