// Crie uma funcao q verifique
// corretamento o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(verificarDado(2));

//crie um objeto quadrado com a
// propriedade lados e torne
// ela imutavel
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: { value: 4, emuerable: true },
});
console.log(quadrado);

//previna qualquer mudancao no objeto abaixo

const config = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(config);
// Liste o nome de todas as
// propriedades do prototipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))
