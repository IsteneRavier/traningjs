// utilizando foreach no array abaixo
// some os valores de taxas e os valores de recebimento
//valores totais

const transacoes = [
  {
    descricao: "taxa do pao",
    valor: "R$ 39",
  },

  {
    descricao: "taxa do mercado",
    valor: "R$ 129",
  },

  {
    descricao: "recebimento de cliente",
    valor: "R$ 99",
  },

  {
    descricao: "taxa do banco",
    valor: "R$ 129",
  },

  {
    descricao: "recebimento de cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recbeimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpoo = +item.valor.replace("R$", "");
  if (item.descricao.slice(0, 4) === "taxa")
    taxaTotal = taxaTotal + numeroLimpoo;
  else {
    recbeimentoTotal += numeroLimpoo;
  }
});

console.log(taxaTotal);
console.log(recbeimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "carro;aviao;tren;onibus;bicicleta";
const arrayLista = transportes.split(";");
console.log(arrayLista);

//substitua todos os span por a

const html = `
            <ul>

             <li><span>Sobre</span></li>
             <li><span>Produtos</span></li>
             <li><span>Contato</span></li>
             
             </ul>
`;

const htmlArray = html.split("span");
const htmlSubistituido = htmlArray.join("a");
console.log(htmlSubistituido);

// retorne o ultimo cacater da frase

const frase = "melhor do ano!";
console.log(frase.substr(-1));

//retorne o total de taxas
const transacoes2 = [
  "taxa do banco",
  "     TAXA DO PÃO",
  "  taxa do mercado",
  "deposito Bancario",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLocaleLowerCase();
  item = item.trim();
  item = item.slice(0,4)

  if(item === "taxa") { 

    taxasTotal++
  }

});
console.log(taxasTotal);
