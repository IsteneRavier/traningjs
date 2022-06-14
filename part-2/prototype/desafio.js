// crie uma funcao construtora de Pessoas
// deve conter nome, sobrenome e idade
// crie um metood no prototipo q retonre o nome da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
this.sobrenome = sobrenome;
this.idade = idade;

}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}  `
}

const andre = new Pessoa('Andre', 'Rafael', 28);






// liste os metodos acessados por dados criados com nodelist
// htmlcollection, document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)
// console.log(NodeList.prototype, HTMLAllCollection.prototype, Document.prototype)


//liste os construtores dos dados abaixo
const li = document.querySelector("li");
 
li; // HTMLLIElement
li.click; //function
li.innerText; // string
li.value; //  number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); //undeafined

//qual o construtor do dado abaixo:
li.hidden.construtor.name; //string


