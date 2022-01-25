/*const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    consumo: 11,
    capacidadeTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    }
}
Modo Antiquado
let nome = carro.nome
let marca = carro.marca
console.log(nome)
console.log(marca)*/

/*Objeto simples
const {nome, ano} = carro
console.log(nome)
console.log(ano)

/*Objetos aninhados
const{motor: {cavalos}} = carro
console.log(cavalos)*/

const carros = [
    {nome: "Fiesta", marca: "Ford",cor: "Amarela"},
    {nome: "Uno", marca: "Fiat", cor: "Preto"},
    {nome: "Gol", marca: "VW", cor: "Branco"}
]
const nomes = carros.map(({nome}) => nome)
console.log(nomes)
