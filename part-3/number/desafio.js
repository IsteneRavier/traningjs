// retonre um numero aleatorio entre 1050 e 2000

const numeroAletatorio = Math.floor(Math.random()* (1050 - 2000 + 1) + 2000);
console.log(numeroAletatorio);

// retorne o maior numero da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// crie uma funcao para limpar os precos e retornar os numeros com centavos arrendodados
// depois retorne a soma total
const listaPrecos = [ 'R$ 59,99', 'R$ 100,222', "R$ 230", "R$ 200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', "").trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco)=> {
  soma += limparPreco(preco);
})

console.log(soma);
limparPreco(listaPrecos[1])