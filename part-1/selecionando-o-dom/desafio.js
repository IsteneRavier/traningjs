// retorne todas as imagens
const onlyImage = document.querySelectorAll("img");
console.log(onlyImage);

//retorne as imagens que comecam com img
const imgagens = document.querySelectorAll(".animais img"); // outra forma de fazer a mesma coisa ('img[src^="img/imagem"]')
console.log(imgagens);

//selecione todos os links interno (onde href começa com #)
const AllLink = document.querySelectorAll('[href^="#"]');
console.log(AllLink);

// selecione o primeiro h2 dentro de .animais-descricao
const Animal1 = document.querySelector(".animais-descricao h2");
console.log(Animal1);

//selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);