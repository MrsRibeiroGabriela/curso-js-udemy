//Elementos da Parte 1
const nomeBusca = document.querySelector(".input");
const mensagemErro = document.querySelector("#mensagemErro");
const botaoBuscar = document.querySelector("#botao_buscar");
//Elementos da Parte 2
const titulo = document.querySelector("#titulo");
const ano = document.querySelector("#ano");
const duracao = document.querySelector("#duracao");
const genero = document.querySelector("#genero");
const diretor = document.querySelector("#diretor");
const atores = document.querySelector("#atores");
const poster = document.querySelector(".poster");
const sinopse = document.querySelector("#sinopse");
//API
const apiKey = "b1b4db02";
const imgDefault = "./default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=${apiKey}`);
     return resposta.json();
}
//função ao clicar no botão de buscar
botaoBuscar.addEventListener("click", () => {
     limparCampos();
     core();
})

//função principal
async function core(){
     try {
       const filme = await buscaFilme(nomeBusca.value);
          validaDados(filme);
          defineValores(filme);
     } catch(erro){
          console.log(erro);
          mensagemErro.textContent = `${erro}`;
     }
}
     

//mapeamento entre os elementos e os valores objeto filme
function defineValores(filme){
     titulo.textContent = filme.Title;
     sinopse.textContent = filme.Plot;
     ano.textContent = `Year: ${filme.Year}`;
     duracao.textContent = `Run time: ${filme.Runtime}`;
     genero.textContent = `Genre: ${filme.Genre}`;
     atores.textContent = `Actors: ${filme.Actors}`;
     diretor.textContent = `Director: ${filme.Director}`;
     poster.setAttribute("src", filme.Poster);
}

//função para limpar campos antes de realizar uma nova busca
function limparCampos(){
     titulo.textContent = "";
     sinopse.textContent = "";
     ano.textContent = "";
     duracao.textContent = "";
     genero.textContent = "";
     atores.textContent = "";
     diretor.textContent = "";
     poster.setAttribute("src", imgDefault);
     mensagemErro.textContent = "";
}

//validação de dados
function validaDados(filme){
     if(filme.Plot === undefined || filme.Year === undefined || filme.Actors === "N/A"){
          throw new Error("Filme não encontrado!");
          //erro será tratado na função core - try - catch
     }
}