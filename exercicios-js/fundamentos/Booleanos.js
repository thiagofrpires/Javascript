let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))
console.log(!!Infinity)

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false ))

console.log('Para finalizar: ')
console.log(!!("" || null || 0 || ' '))

console.log('Escreva o seu nome: (Lembrando que o nome não é obrigatório) ')
let nome = ''
console.log(nome || 'Usuário Anônimo')
