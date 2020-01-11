// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) //NaN pq não tem outro numero para somar
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // só irá somar os dois primeiros, visto que acima somente tem as varáveis a e b.
imprimirSoma() // NaN por causa pq não tem numero


//funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3)) //irá declarar o valor normal
console.log(soma(2)) //o programa irá conhecer a variavel b como 1. pq b = 1
console.log(soma()) // não tem a primeira variável, ou seja, NaN