// transforme o objeto abaixo em uma constructor function
const pessoa = {
  nome: "nomepessoa",
  idade: 0,
  andar() {
    console.log(this.nome + "andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + "andou");
  };
}

//crie 3 pessoas, joao 0 20 anos,
// maria - 25 anos, bruno - 15 anos
const joao = new Pessoa("joao", 20);
const maria = new Pessoa("maria", 25);
const bruno = new Pessoa("bruno", 15);

//crie uma constructor function Dom para manipulação
// de listas de elementos do dom. deve conter as seguintes propriedades e metodos

//elements, retorna NodeList com os elementos selecionados
//addClass(classes), adiciona a classe a todos os elementos
// removeClass(classes), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li");

// listaItens.addClass("ativar");
