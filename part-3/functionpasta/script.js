// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2;
// }
// console.log(somar(3, 3));

// function daroi(nome, idade) {
//   console.log("ola peter " + nome + idade);
// }

// daroi.call(null, "ravier", 21);

// window.marca = 'carro';
// window.ano = 288
// function descricaoCarro(velocidade, mk) {
//     console.log(this)
//     console.log(this.marca +" "+ this.ano + " " + velocidade + mk);

// }

// descricaoCarro.call({marca: 'honda', ano: 2019}, 140,"km")

// const carros = ["ford", "fiat", "vw"];
// const frutas = ["banana", "uva", "pera"];

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this)
//   this.element.classList.add(classe);

// };

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom("ul");

// ul.ativo.call(li,"ativar");
// console.log(ul);

const frutas = ['uva', 'banana', 'maca'];

Array.prototype.mostrarThis = function() {
    console.log(this);
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.bind(li, (item)=> {
    return item.classList.contains("ativo")
})

console.log(li)
console.log(filtro())

const numeros = [33, 34, 333, 100, 11, 12, 33, 10, 12  ];
console.log(Math.max.apply(null, numeros))

const $ = document.querySelectorAll.bind(document, "li")

const carro = {
    marca: 'ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = { 
    marca: 'honda'

}

const aceleradorHonda = carro.acelerar.bind(honda);

console.log(aceleradorHonda(100, 20))

console.log(carro)