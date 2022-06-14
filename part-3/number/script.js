console.log(Number.isNaN( " "));
console.log(Number.isSafeInteger(1.001));

console.log(parseFloat('32342.4344'))
console.log(parseFloat('100 reais'))
console.log(parseInt("100.99"))

const preco = 10.300302;
console.log(preco.toFixed())

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style:"currency", currency: "BRL"});
console.log(valor)
console.log(Math.PI)

const numeroAletatorio = Math.floor(Math.random()* 500);
console.log(numeroAletatorio)

const numeroAletatorio2 = Math.floor(Math.random()* (40 - 20 + 1) + 20);
console.log(numeroAletatorio2)