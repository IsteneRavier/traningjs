// Quando o usuario clickar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos demais itens caso eles
//possuam a mesma. Previna o comportamento padrao desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
  console.log(event);
}
linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});

//Selecione todos os elementos do site começando a partir do body,
// ao clique mostre extamente quais elementos estao sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  console.log(event.currentTarget);
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

//Utilizando o codigo anterior, ao inves de mostra no console, remova o elemento que
// esta sendo clicado, o metodo remove() remove um elementos

// const todosElementos = document.querySelectorAll("body *");

// function handleElemento(event) {
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

//se o usuario clickar na tecla (t), aumente todo o texto do site

function handleKeyboard(event) {
  console.log(event.key);
  if (event.key === "t") {
    console.log("clickou no t");
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleKeyboard);
