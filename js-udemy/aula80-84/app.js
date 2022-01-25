//Percorrendo uma string
function falaCebolinha(frase){
    let fraseCebolinha = ""
    for(let letra of frase){
        if(letra === "r"){
            fraseCebolinha += "l"
        } else {
            fraseCebolinha += letra
        }
    }
    return fraseCebolinha
}

console.log(falaCebolinha("Não troco as letras de propósito"))
console.log(falaCebolinha("Vamos tomar um sorvete"))