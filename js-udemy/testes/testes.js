/*replace
let meuNome = 'Gabriela Ribeiro'
meuNome = meuNome.replace('Ribeiro','Bruno')
console.log(meuNome)*/

//percorrendo string

/*IndexOf
function meuIndexOf(palavra, letra){
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === letra){
            return i
        }
    }
    return -1
}
console.log(meuIndexOf('Gabriela', 'G')) //retorna o numero do indice

function meuIncludes(palavras, letra){
    for(let i =0; i < palavras.length; i++){
        if(palavras[i] == letra){
            return true
        }
    }
    return false
}
console.log(meuIncludes('Gabriela', 'p')) //retorna true or false

function meuIndexOf(palavra, letra){
    for(let indice in palavra){
        if(palavra[indice] === letra){
            return indice
        }
    }
    return -1
}
console.log(meuIndexOf('Giovana','i'))

function meuIncludes(palavra, letra){
    for(let indice in palavra){
        if(palavra[indice] === letra){
            return true
        }
    }
    return false
}
console.log(meuIncludes('Gabriela', 'b'))

function meuIncludes(palavra, letra){
    for(let letraAtual of palavra){
        if(letraAtual === letra){
            return true
        }
    }
    return false
}
console.log(meuIncludes('Gabriela', 'o'))

function contaEspacos(palavra){
    let count = 0
    palavra.split('').forEach((letra) => {
        if(letra == ''){
            count += 1
        }
    })
    return count
}
console.log(contaEspacos('G A B I')) 

//Js Assíncrono
console.log("Uma linda mulher");
setTimeout(console.log, 1500, "O contratempo"); //setTimeout(funcao, delay, parametros)
console.log("Harry Potter");

console.log("Olá");
setTimeout(console.log, 1500, "Manuel");
console.log("Silva")

//Callback
function exibeNome(nome, callback){
    setTimeout(()=>{
        console.log(nome);
        callback();
    }, 1500);
}
console.log("Olá, ");
exibeNome("Manuel", function(){
    console.log("Silva");
})*/



