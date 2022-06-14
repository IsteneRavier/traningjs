// Mostre no console cada paragrafo do site
const parafragos = document.querySelectorAll("p");
console.log(parafragos);

parafragos.forEach((item) => {
  console.log(item);
});

// Mostre no console apenas o texto

parafragos.forEach((item) => {
  console.log(item.innerText);
});

// corriga os erros abaixo
const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0 
imgs.forEach(()=> {
    console.log(i++);

})

imgs.forEach(() => i++);