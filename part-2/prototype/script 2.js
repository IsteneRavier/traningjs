function Carro(marcaAtribuida, PrecoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = PrecoAtribuido;
}

const honda = new Carro("honda", 3000);
const fiat = new Carro("fiat", 2000);

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
  }

const mazda = new Carro2("mazda", 5000);