// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const transformandoParagrafos = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(paragrafos);
console.log(transformandoParagrafos);

// Crie uma funcao que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;

  return elemento;
}

console.log(criarElemento("ul", "ativo", "piroca"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1titulos = criarElemento.bind(null, "h1", "titulo");
const cursosJS = h1titulos("cursos de javascript");
const cursosHTML = h1titulos("cursos de HTML");
console.log(cursosHTML, cursosJS);
