let nombre = document.getElementById('nombre')
let numero = document.getElementById('numero')
let enviar = document.getElementById('boton')
let form = document.getElementById('formulario')
let hombre = document.getElementById('generohombre');
let mujer = document.getElementById('generomujer');


function validarDatos (evento){
    let valorHombre = 35000
    let valorMujer = 20000

    evento.preventDefault()
    if (numero.value < 18){
        alert('no puedes ingresar')
        return false
    } else {
        alert('puedes ingresar')
    }

    if (hombre.checked) {
        alert('hola ' + nombre.value + ' debes pagar ' + valorHombre + ' $')
    } else if (mujer.checked) {
        alert('hola ' + nombre.value + ' debes pagar ' + valorMujer + ' $')
    }
}

form.addEventListener('submit', validarDatos)

console.log('ciclo dos en dos')

for (let i = 0; i < 100; i = i + 2) {
    console.log(i)
}

console.log('ciclo de tres en tres')

let contador = 0;

while(contador < 100) {
    console.log(contador)
    contador = contador + 3
}