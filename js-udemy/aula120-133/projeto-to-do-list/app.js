const container = document.querySelector(".container")
const listaAtividades = document.querySelector(".lista_atividades")
const input = document.querySelector(".input")
const erro = document.querySelector(".erro")
const botaoCadastro = document.querySelector(".botao_adc")
const botaoLimpar = document.querySelector(".botao_del_todos")
const paleta1 = document.querySelector("#paleta1")
const paleta2 = document.querySelector("#paleta2")
const paleta3 = document.querySelector("#paleta3")

/* Refatoração: retirar eventos do HTML e inserir dinamicamente por Js */
paleta1.addEventListener('click', () => definePaleta('seagreen'))
paleta2.addEventListener('mousemove', () => definePaleta('slateblue'))
paleta3.addEventListener('dblclick', () => definePaleta('tomato'))
botaoCadastro.addEventListener('click', () => cadastraAtividade())
botaoLimpar.addEventListener('click', () => removeAtividades())

/* Muda cor de fundo */
function definePaleta(cor){
    container.style.background = cor
    listaAtividades.style.background = cor
}

/* Remove todas as atividades da lista ao clicar no botão "Limpar lista"*/
function removeAtividades(){
    /* Enquanto houver um 1o elemento filho, repete o laço */
    while(listaAtividades.firstElementChild){
        listaAtividades.removeChild(listaAtividades.firstElementChild)
    }
}

/* Remove apenas atividade específica */
function removeAtividade(atividade){
    listaAtividades.removeChild(atividade)
}

/* Cria cada elemento da atividade a ser inserida */
function criaAtividade()  {
    const atividade = document.createElement("div") //cria uma div
    atividade.classList.add("atividade") //Adiciona classe

    const nomeAtividade = document.createElement("p") //cria o parágrafo
    atividade.textContent = input.value //define o texto do parágrafo de acordo com o que for digitado na caixa de input

    const botaoLimpar = document.createElement("button") //cria botão de limpar
    botaoLimpar.textContent = "Limpar" //insere o título do botão
    botaoLimpar.classList.add("botao_del") //adiciona classe
    botaoLimpar.addEventListener('click', () => removeAtividade(atividade))//dispara a função para remover atividade específica

    listaAtividades.appendChild(atividade)//adiciona uma child ao parent listaAtividades
    atividade.appendChild(nomeAtividade)//adiciona uma child ao parent atividade
    atividade.appendChild(botaoLimpar)//adiciona uma child ao parent atividade
}

/* Definindo as condições para erro */
function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none"
        criaAtividade()
    }else{
        erro.style.display = "grid"
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput()
}

function limpaInput(){
    input.value = ""
}

/* Ao clicar enter, adiciona atividade digitada na lista */
window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade()
    }
})

