//mude a cor da tela para azul depois para vermelho a cada 2s
// function mudarClasse() {
//   document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 3000);

//crie um cronometro com iniciar, pausar e resetar
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;


function iniciarTempo() {
  timer = setInterval(()=> {
    tempo.innerText = i++;
  }, 300)
  iniciar.setAttribute('disabled', '')

}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled')
  
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
  
}