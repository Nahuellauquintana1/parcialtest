//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero1 = parseInt(prompt("ingrese un numero"));
    var numero2 = parseInt(prompt("ingrese otro numero"));

    if (numero1 == numero2) {
        numero1 = numero1 * numero2;
    } else if (numero1 > numero2) {
        numero1 = numero1 - numero2;
    } else {
        numero1 = numero1 + numero2;
    }

    document.write("El resultado de la cuenta realizada es: " + numero1);

}



