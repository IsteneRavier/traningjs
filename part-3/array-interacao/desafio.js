const comidas = ['pizza', 'frango', 'carne', 'macarrao'];
//remova o primeiro valor de comida e coloque em uma variavel
console.log(comidas)
const primeiroValor = comidas.shift()
console.log(comidas)
//remova o ultimo valor de comida e coloque em uma variavel
const ultimoValor = comidas.pop()
console.log(comidas)

//adicione 'arroz' ao final da array'
const adicionadoFinal = comidas.push("arroz")
console.log(comidas)
//adicione peixe e batata no inicio da array
const adicionadoInicio = comidas.unshift('peixe', 'batata')
console.log(comidas)

const estudantes = ['marcio', 'brenda', 'joana', 'kleber', 'julia'];
//arume os estudantes em ordem alfabetica
estudantes.sort()

// inverta a ordem dos estudantes
estudantes.reverse()


// verifique se a joana faz parte dos estudantes
estudantes.includes("joana");
//verifique se juliana faz parte dos estudantes

console.log(estudantes)
console.log(estudantes.sort())
console.log(estudantes.includes('joana'))
console.log(estudantes.includes('juliana'))

console.log(estudantes.reverse())


let html = 
  `        <section>
        <div>Sobre</div>    
        <div>Produtos</div>    
        <div>Contatos</div>    
        </section>
`;

//substitua section por ul e div por li
//utilizando split e join
let htmlArray = html.split("section")
let htmlArray1 = html.split("div")
let htmlSubistituido = htmlArray.join("ul")
let htmlSubistituido1 = htmlArray1.join("li")
console.log(htmlSubistituido1 );

const carro = ["ford", "fiat", "VW","honda"]
// remova o ultimo carro, mas antes de remover
// salve a array original em uma variavel
const clone = carro.slice()
carro.pop()
