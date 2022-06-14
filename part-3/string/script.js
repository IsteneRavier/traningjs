const comida = "pizza";
const agua = new String("agua");

const frutas = "banana";
const listaFrutas = "melancia, banan, laranja";

listaFrutas.includes(frutas);
frutas.includes(listaFrutas);

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});

const frase = "gauchismo";
frase.repeat(5);

let listaItens = "Camisas Bones Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[" "]+/g, ", ");

const arrayLista = listaItens.split('s, ');
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);
