// var ultimoitem = videogames.pop();

// videogames.push("3DS");

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i = i + 5;
}

var videogames = ["Nintendo", "PS4", "XBOX", "3DS"];
for (var item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  if (videogames[item] === "PS4") {
    break;
  }
}

var tecnologias = ['js', 'py','java', 'c'];

tecnologias.forEach(function (item, index) {
  console.log(item, index);
});
///