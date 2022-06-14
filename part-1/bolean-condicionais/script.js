// var possuiGraducao = true;
// var possuiDoutorado = true;

// if (possuiGraducao) {
//   console.log("É verdadeiro");

//   var x = 10;
// } else if (possuiDoutorado) {
//   console.log("Poussi Doutorado");
// } else {
//   console.log("Não possui nada");
// }

// var nome = false;
// if (nome) {
//   console.log(nome);
// } else {
//   console.log("nome não existe");
// }

// console.log(1 > 5);

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

var condicional = 5 - 10 && 5 + 25;
if (condicional) {
  console.log("verdadeiro", condicional);
} else {
  console.log("falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);
//===========================

var corFavorita = "verde";
switch (corFavorita) {
  case "azul":
    console.log("olhe para o ceú");
    break;
  case "amarelo":
    console.log("olhe para o seu sol");
    break;
  case "verde":
    console.log("olhe para a floresta");
    break;
  default:
    console.log("feche os olhos");
}
