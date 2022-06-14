// crie um objeto com os seus dados pessoasi
// deve ter pelo menos duas propriedades nome e sobrenome
var objeto = {
  nome: "istene",
  sobrenome: "ravier",
  idade: 21,
  estado: "rs",
   
};

objeto.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}


// modifique o valor da propriedade preço para 3000
var carro = {
  preco: 1000,
  porta: 4,
  marca: "audi",
};

carro.preco = 3000;

//crie um objeto de um cachorro que represente um labrador preto com 10 anos que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if(pessoa === "homem") {
      return "latir"
    } else {
      return "nada"
    }
  }

}