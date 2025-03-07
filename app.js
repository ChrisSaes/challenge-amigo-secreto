// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let elementoLista = document.querySelector('#listaAmigos');
let elementoResultado = document.querySelector('#resultado');

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;

    if(amigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {

        listaAmigos.push(amigo);
        elementoLista.innerHTML = '';

        for(let i = 0; i < listaAmigos.length; i++ ) {
            agregarElemento(listaAmigos[i]);
        }

        document.querySelector('#amigo').value = '';
    }
}

function agregarElemento(amigo) {
    let nombre = document.createElement('li');

    elementoResultado.innerHTML = '';
    nombre.textContent = amigo;
    elementoLista.appendChild(nombre);
}

function sortearAmigo() {
    if(listaAmigos.length <= 1 ) {
        alert('Ingresa al menos 3 amigos para poder realizar el sorteo.');
    } else {
        let posicionSorteada = Math.floor(Math.random()*listaAmigos.length);
        let amigoSecreto = `El amigo secreto sorteado es: ${listaAmigos[posicionSorteada]}`;
        elementoLista.innerHTML = '';
        agregarResultado(amigoSecreto);
        listaAmigos = [];
    }
}

function agregarResultado(resultado) {
    let nombreSecreto = document.createElement('li');

    elementoResultado.innerHTML = '';
    nombreSecreto.textContent = resultado;
    elementoResultado.appendChild(nombreSecreto);
}