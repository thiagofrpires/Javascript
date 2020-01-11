function tratamentoErro(erro) {
    throw new Error('Ocorreu um erro de programação')
    //throw 10
    //throw true
    //throw 'mensagem'
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratamentoErro(e)
    } finally {
        console.log('FIM')
    }
}
const obj = { name: 'Thiago' } 
imprimirNomeGritado(obj)