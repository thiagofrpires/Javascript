// par nome/valor
const saudacao = 'eai' // contexto léxico 1

function exec() {
    const saudacao = 'tmj' // contexto léxico 2
    return saudacao
    /* não importa se a variável tiver o mesmo nome
    ela irá  buscar pelo bloco const saudacao = 'tmj', 
    caso não conseguir buscar, ela 
    buscará o valor acima, const saudacao = 'eai' */
    
}
// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Thiago',
    idade: 23,
    peso: 67,
    altura: 1.68,
    endereco: {
        rua: 'Rua Caibar Schutel',
        bairro: 'Itatiaia',
        numero: 299,
        complemento: 'C',
        dadosprofissionais: {
            ensino: 'Cursando Ensino Superior',
            profissao: 'T.I',
            faculdade: 'Faculdade de Duque de Caxias - Universidade Brasil',
        }
        
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)

