const prod1 = {} // [] -> é para array <- | {} -> é para objeto <-
prod1.nome = 'Galaxy S8'
prod1.preço = 1999.99
prod1['Desconto Black Friday'] = 2.50 //Evitar atributos com espaço
prod1.armazenamento = '128gb'
prod1.memoria = '4gb'
prod1.processador = 'Exynos'
prod1.nucleos = '8 núcleos. Octa-Core.'
prod1.gpu = 'Adreno'
prod1.tela = 'AMOLED 5.8 Polegadas'
prod1.definição = '4k'
prod1.bateria = '3.300Mhz'
prod1.sistema = 'Android'


console.log(prod1)

const prod2 = {
    nome: 'Moto G 4 Plus',
    preço: 899.99,
    armazenamento: '32gb',
    memoria: '2gb',
    processador: 'Snapdragon',
    nucleos: 'Octacore',
    gpu: 'Adreno',
    tela: 'TFT, 5.5 Polegadas',
    definição: 'Full HD',
    bateria: '3.000Mhz',
    sistema: 'Android',
}

console.log(prod2)