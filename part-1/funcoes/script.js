function areaQuadrada(lado) {
  return lado * lado;
}

console.log(areaQuadrada(1.99));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}
corFavorita("azul");

addEventListener("click", function () {
  console.log("Oi");
});

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preecha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(" "));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = "Designer";

function dados() {
  var nome = "Ravier";
  var idade = 21;
  function outrosDados() {
    var endereco = "Rio Grande do Sul";
    var idade = 22;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); //retorna "Istene, 21, Rio Grande do Sul, Designer"
// outrosDados(); //retorna erro
