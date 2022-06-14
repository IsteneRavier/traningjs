var minhaIdade = 21;
var meuParente = 11;
if (minhaIdade > meuParente) {
  console.log("é maior");
} else if (minhaIdade === meuParente) {
  console.log("é igual");
} else {
  console.log("é menor");
}

var expressao = 5 - 2 && 5 - "s" && 5 - 2;
console.log(expressao);


var nome = 'Istene';
var idade = 21;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

var brasil = 207;
var china =  1340;
if (brasil > china) {
  console.log("Brasil é maior que China");

} else {
  console.log("China é maior que Brasil")
}

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//========================================
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}


var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}