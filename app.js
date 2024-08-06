let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoAlElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroUsuario === numeroSecreto){
        asignarTextoAlElemento('p', `Felicidades, has acertado!. Lo lograste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //EL USUARIO NO ACERTO
            if(numeroUsuario > numeroSecreto) {
                asignarTextoAlElemento('p', 'El numero es menor');
            }
            else if(numeroUsuario < numeroSecreto) {
                asignarTextoAlElemento('p', 'El número es mayor');
            }
            else{
                asignarTextoAlElemento('p', 'Error');
            }
            intentos++;
            limpiarCaja();
        }
        return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    //si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoAlElemento('p', 'Ya se sortearon todos los números posibles');
    }
    else{
        //Sí el numero generado esta en la lista 
            if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoAlElemento('h1', 'Juego del número secreto');
    asignarTextoAlElemento('p', `Ingrese un número entre el 1 y el ${numeroMaximo}`);
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de instrucción
    condicionesIniciales();
    //deshabilitar botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
console.log(numeroSecreto);