/*const listaPosts = document.querySelector("#listaPosts");
//objeto XMLHttpRequest
const httprequest = new XMLHttpRequest();
httprequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
httprequest.send();

//console.log(httprequest);
let posts;

httprequest.onreadystatechange = function(){
    if(httprequest.readyState === 4 && httprequest.status === 200){
        posts = JSON.parse(httprequest.response);
        //console.log(httprequest.response);
        exibePost();
    }
}*/

/*const listaPosts = document.querySelector("#listaPosts");
let posts;
//default = get
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())//convertendo a resposta para o formato json
    .then((json) => {
        posts = json;
    })
    .then(() => {
        exibePost();
    })

function exibePost(){
    setTimeout(() => {
        let saida = "";
        posts.forEach((post) => {
            saida += `<li> ${post.title} </li>
            <li> ${post.body} </li> <hr></hr>`
        });
    listaPosts.innerHTML = saida;
    }, 3000)
};*/

/*const listaPosts = document.querySelector("#listaPosts");
let posts;
//método post
fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({ //método para converter os dados para json
            title: "novo post",
            body: "corpo do novo post",
            userID: 5,
        }),
        //cabeçalho
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())//convertendo a resposta para o formato json
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        //exibePost();
    })*/

/*const listaPosts = document.querySelector("#listaPosts");
let posts;
//método put
fetch("https://jsonplaceholder.typicode.com/posts/2",{ //atualizando o post de id:2
        method: "PUT",
        body: JSON.stringify({ //método para converter os dados para json
            title: "novo post",
            body: "corpo do novo post: atualização",
            userID: 5,
        }),
        //cabeçalho
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())//convertendo a resposta para o formato json
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        //exibePost();
    })*/

/*const listaPosts = document.querySelector("#listaPosts");
let posts;
//método patch
fetch("https://jsonplaceholder.typicode.com/posts/2",{ //atualizando o post de id:2
        method: "PUT",
        body: JSON.stringify({ //método para converter os dados para json
            title: "atualizando apenas o título",
        }),
        //cabeçalho
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())//convertendo a resposta para o formato json
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        //exibePost();
    })*/

const listaPosts = document.querySelector("#listaPosts");
let posts;
//método delete
fetch("https://jsonplaceholder.typicode.com/posts/2", { //deletando o post de id:2
        method: "DELETE",
    })
    .then((response) => response.json())//convertendo a resposta para o formato json
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
            //exibePost();
    })