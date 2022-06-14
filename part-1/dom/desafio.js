// retorne o url da pagina atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

//seleciona o primeiro elemento da pagina que possua a classe ativo
const elemento = document.querySelector(".ativo");

//retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
//retorne a largura da janela
const tamanho = window.innerWidth;
console.log(tamanho);
