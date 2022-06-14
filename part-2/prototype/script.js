function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "abraçou";
  };
  this.andar = function () {
    return "andou pelo objeto";
  };
}

var obj = {
  nome: "andre",
  idade: 33,
};

Pessoa.prototype.andar = function () {
  return this.nome + "pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + "pessoa nadou";
};

const andre = new Pessoa("andre", 25);

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = "brasil";
const cidade = new String("rio");

const listaAnimais = ["cachorro", "gato", "cavalo"];

//transforma em uma array
const listaArray1 = Array.prototype.slice.call(listaAnimais);
const listaArray2 = Array.from(listaAnimais);


const Carro = {
  marca: 'ford',
  preco: 2000,
  andar() {
    return true;
  }
}
