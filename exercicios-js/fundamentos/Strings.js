const Nome = 'Thiago'

console.log(Nome.charAt(4)) //A contagem dos caracteres começam do 0 ao invés de 1
console.log(Nome.charAt(6)) // Mesmo que não tenha algum caractere desta posição, o javascript não dará erro. Apenas estará vazio.
// Javascript dificilmente dará erro, a menos que o erro seja muito grave.
console.log(Nome.charCodeAt(2)) // O programa dirá o código da tabela Unicode do caractere em HTML.
console.log(Nome.indexOf('T'))

console.log('Nome: '.concat(Nome).concat('!'))
console.log('Nome: ' + Nome + '!') // mesma coisa do comando concat acima

console.log(Nome.replace(/\d/, 'i')) //regex
console.log(Nome.replace(/\w/g, 'y')) //regex
console.log(Nome.replace('i', 'y'))

console.log('Thiago,Leo,Jorge'.split(','))
console.log('Thiago,Leo,Jorge'.split(/,/)) //mesma coisa que o anterior acima
console.log('Thiago,Leo,Jorge'.split(/./)) //regex

console.log(Nome.substring(1))
console.log(Nome.substring(0,4))