// const carros = ['fiat', 'ford', 'honda'];
// carros.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

// const li = document.querySelectorAll("li");

// li.forEach(i => i.classList.add('ativa'))

// const carros = ["ford", "fiat", "honda"];

// const novaArray = carros.map((item, index, array) => {
//   return item.toLocaleUpperCase();
// });

// const number = [2, 4, 5, 6, 78];
// const numberx2 = number.map((n) => n * 2);
// console.log(numberx2);

// console.log(novaArray);
// console.log(carros);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },

//   {
//     nome: "HTML 2",
//     min: 10,
//   },

//   {
//     nome: "CSS 1",
//     min: 20,
//   },

//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas);

// //forma extensa
// // function nomeAulas(aula) {
// //     return aula.nome;
// // }

// // const arrayNomeAulas = aulas.map(nomeAulas);

// //forma simplificada
// const nomeAulas = (aula) => aula.nome;
// const arrayNomeAulas = aulas.map(nomeAulas);

// const aulas = [10, 25, 30];
// const reduceAulas = aulas.reduce((acumulador, item, index, array ) => {
//   console.log(acumulador, item, index, array)
//   return acumulador + item
// }, 0)

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 4, 54, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if (anterior > atual) return anterior;
//   else return atual;
// });

// console.log(maiorNumero)

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   console.log(aula.nome);
//   acumulador[index] = aula.nome;
//   console.log(acumulador);
//   return acumulador;
// }, {});

const frutas = ["banana", "pera", "uva"];

const temUva = frutas.some((item) => {
  return item === "uva";
});
console.log(temUva);
 

const every = frutas.every((fruta) => {
  return fruta
});

const indexUva = frutas.findIndex(item => {
  return item === 'uva'
})

console.log(every);
console.log("index:", indexUva);


// console.log(temUva);
 
const numerosArray = [6, 43, 22, 88, 101, 29];
const maiorque3 = numerosArray.every(n => n > 7);
console.log(maiorque3)

const frutas1 = ["banana", undefined, null, " ", "uva", 0, "maça"];

const arrayFrutas = frutas1.filter((item)=> {
  console.log(item)
  return true
})

console.log(arrayFrutas);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },

  {
    nome: "HTML 2",
    min: 10,
  },

  {
    nome: "CSS 1",
    min: 20,
  },

  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas.filter((aula)=> {
  return aula.min > 15 
})

console.log(maiores15)