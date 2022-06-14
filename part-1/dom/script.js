// window.alert("XD");

const h1selecionado = document.querySelector('h1');
const h1Classes = h1selecionado.classList; 


function callback1 () {
    console.log('clickou em', h1selecionado.innerText );

}

h1selecionado.addEventListener('click', callback1);
