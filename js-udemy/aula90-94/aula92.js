function cadastraCliente(nomeCliente, SobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente){
    cliente = {
        nome: nomeCliente,
        sobrenome: SobrenomeCliente,
        idade: idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            avalistas: avalistasCliente
        },
        adicionaAvalista: function(avalista){
            this.emprestimo.avalistas.push(avalista)
        },
        removeAvalista: function(){
            this.emprestimo.avalistas.pop()
        },
        editaAvalista: function(nomeAvalista, indice){
            this.emprestimo.avalistas[indice] = nomeAvalista
        },
        ordenaAvalista: function(){
            this.emprestimo.avalistas.sort()
        },
        exibeAvalistas: function(){
            this.emprestimo.avalistas.forEach((avalista,indice) => {
                console.log(`O ${indice + 1}o é ${avalista}`)
            })
        }
    }
    return cliente
}

function defineTaxa(idadeCliente){
    if(idadeCliente >= 18 && idadeCliente <=25){
        return 0.09
    } else if(idadeCliente >=26 && idadeCliente <=35){
        return 0.08
    } else if(idadeCliente >=36 && idadeCliente <=50){
        return 0.07
    } else {
        return 0.06
    }
}

function credenciaisInvalidas(mensagem){
    this.nome = "Credenciais Invalidas"
    this.mensagem = mensagem
}

function adicionaInfLogin(cliente, email, senha){

    if(email.indexOf('@') !== -1 && senha.length >5){
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente
    } else {
        throw new credenciaisInvalidas('Os dados são inválidos')
    }
}

try{
    const cliente1 = cadastraCliente('Edval', 'Silveira', 56, 150000, 9, true,['Antônia','Bruno','Gabriela'])
    console.log(adicionaInfLogin(cliente1, 'edval@email.com', 'ed12'))
}catch(erro){
    console.log(erro)
    console.log("Nome", erro.nome)
    console.log("Mensagem", erro.mensagem)
}finally{
    console.log("Deseja realizar uma nova operação?")
}

/*const cliente1 = cadastraCliente('Edval', 'Silveira', 56, 150000, 9, true,['Antônia','Bruno','Gabriela'])

console.log(adicionaInfLogin(cliente1, 'edval@email.com', 'ed12345'))
console.log(adicionaInfLogin(cliente1,'edval.email.com','edv12345'))
console.log(adicionaInfLogin(cliente1, 'edval@email.com', 'ed12'))*/