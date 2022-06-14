function isTruthy(dado) {
  return !!dado;
}

function perimetro(soma) {
  return soma + soma + soma + soma;
}

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

function IsEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

function tipoDeDado(dado) {
  return typeof dado;
}

addEventListener('scroll', function () {
    console.log('IsteneRavier');
})