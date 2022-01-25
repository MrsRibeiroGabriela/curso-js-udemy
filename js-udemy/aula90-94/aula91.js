/*function soma(num1, num2){
    if(typeof num1 !== "number"){
        throw TypeError("O primeiro argumento deve ser um número.")
    }
    if(typeof num2 !== "number"){
        throw TypeError("O segundo argumento deve ser um número.")
    }
    return num1 + num2
}
try{
    console.log(soma(10,20))
}catch(erro){
    console.log(erro)
}

try{
    console.log(soma("Gabriela",20))
}catch(erro){
    console.log(erro)
}

try{
    console.log(soma(10,"Bruno"))
}catch(erro){
    console.log(erro)
}*/

try{
    /*let x = y +  10
    console.log(x)*/
    let num = 1
    num.toUpperCase()
} catch(erro){
    if(erro instanceof TypeError){
        console.log("TypeError")
    }else if(erro instanceof ReferenceError){
        console.log("ReferenceError")
    }
}
