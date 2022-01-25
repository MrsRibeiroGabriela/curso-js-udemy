const listaFilmes = document.querySelector("#listaFilmes");

const filmes = [
    {nome:"Uma linda mulher", genero:"Romance"},
    {nome:"Pânico", genero:"Terror"},
    {nome:"Os fantasmas se divertem", genero:"Comédia"}
]

const criaElementosUi = function(){
    let aux = ""
    filmes.forEach((filme) =>{
        aux += `<li>Nome: ${filme.nome} | Gênero: ${filme.genero}</li>`
   });
   listaFilmes.innerHTML = aux;
}

function exibeFilmes(){ //função assíncrona
    setTimeout(criaElementosUi, 2000);
}

/*Callback:
function adicionaFilme(filme, callback){ //função assíncrona
    setTimeout(()=>{
        filmes.push(filme);
        callback(); //chama função exibeFilmes
    }, 3000);
    console.log(filmes);
    
}*/
//Convertendo callback para promise:
function adicionaFilme(filme){
    const promise = (resolve, reject) => {
        setTimeout(()=>{
            if(filme.nome === ""){
                reject(new Error("Nome inválido!"));
            } else{
                filmes.push(filme);
                resolve(filme); 
            }
        }, 3000);
    }
    return new Promise(promise);
}
//adicionaFilme({nome: "Matrix", genero: "Ficção científica"}, exibeFilmes); //função exibeFilmes = callback
async function funcaoAsync(){
    try {
        const oContraTempo = await adicionaFilme({nome: "O contratempo", genero: "Suspense"});
        console.log(oContraTempo);
        await adicionaFilme({nome: "Matrix", genero: "Ficção científica"});
        await adicionaFilme({nome: "Frozen", genero: "Musical"});
        await adicionaFilme({nome: "O Senhor dos Anéis", genero: "Ação"});
        await adicionaFilme({nome: "Da Magia a Sedução", genero: "Romance"});
        await adicionaFilme({nome: "A Bela e a Fera", genero: "Infantil"});
        exibeFilmes();
    } catch (error){
        console.error(error);
    }
    
}
funcaoAsync();

/*
adicionaFilme({nome: "Matrix", genero: "Ficção científica"})
    .then(() =>{
        return adicionaFilme({nome: "Frozen", genero: "Musical"})
    })
    .then(() =>{
        return adicionaFilme({nome: "O Senhor dos Anéis", genero: "Ação"})
    })
    .then(() =>{
        return adicionaFilme({nome: "Da Magia a Sedução", genero: "Romance"})
    })
    .then(() =>{
        return adicionaFilme({nome: "A Bela e a Fera", genero: "Infantil"})
    })
    .then(exibeFilmes)
    .catch((erro) =>{
        console.error(erro);
    });*/