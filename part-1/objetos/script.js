var pessoa = {
  nome: "istene",
  idade: 21,
};
console.log(typeof pessoa);

var quadrado = {
  lados: 3,
  area: function (lado) {
    return lado * lado;
  },

  perimetro: function (lado) {
    return this.lados * lado
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
