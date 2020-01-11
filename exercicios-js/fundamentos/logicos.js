function compras(freela1, freela2) {
    const comprarLanche = freela1 || freela2
    const comprarPS5 = freela1 && freela2
    //const comprarPS5 = !!(freela1 ^ freela2) //bitwise xor (ou exclusivo)
    const comprarGPU = freela1 != freela2
    const economizar = !comprarLanche // operador unário

    return { comprarPS5, comprarGPU, comprarLanche, economizar}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))