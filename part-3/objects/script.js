// const pessoa = new Object({
//     nome: 'robertinho'
// })

// console.log(pessoa)

// const carro = {
//     rodas: 4,
//     init(valor) {
//     this.marca = valor;
//     return this;

//     },
//     acelerar() {
//         return this.marca +  ' acelerou';
//     },
//     buzinar() {
//         return this.marca + 'buzinou';

//     }
// }

// const honda = Object.create(carro).init("honda");
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//     acelerar() {
//         return 'acelerou';

//     },
// buzinar() {
//     return 'buzinou'
// },
// }

// const moto = {
//     rodas: 2,
//     capacete: true,

// }

// Object.assign(moto, funcaoAutomovel)
// console.log(moto)

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4;
//     },
//   },
// });
// console.log(moto);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(
//   window,
//   "innerHeight"
// );

// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ["banan"];
// console.log(Object.getPrototypeOf(frutas));
// console.log(Array.prototype);

// const frutas1 = ["banana", "pera", "maca"];
// const frutas2 = ["banana", "pera", "maca"];

// Object.is(frutas1, frutas2);

// const carro = {
//   marca: "ford",
//   ano: 2018,
// };
// Object.freeze(carro)

// carro.marca = 'honda';
// console.log(carro)

const frutas = ['banana', 'pera', 'abacate'];
const frase = 'oi frase';
const somar = function(a, b){
  return a + b
};

console.log(somar.toString());

console.log(Object.prototype.toString.call(somar));