//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero;
    var contador = 0;
    var contador2 = 0;
    var flag = 0;
    var maximo;
    var minimo;
    var respuesta = "si";
    var numerototal = 0;
    do {
        numero = parseInt(prompt("Ingrese un numero positivo"));

        while (numero <= 0 || isNaN(numero)) {
            numero = parseInt(prompt("Error el numero ingresado no es positivo, por favor ingrese un numero positivo"));

        }
        
            if (numero % 2 == 0) {
                contador++;
            } else if (flag == 0) {
                maximo = numero;
                minimo = numero;
                flag = 1;
            }
            if(numero > maximo){
                maximo = numero;
            }else if(numero < minimo){
                minimo = numero;
            }

        numerototal = numerototal + numero;
        contador2++;
        respuesta = prompt("¿Quiere continuar ingresando numeros?")
    } while (respuesta == "si");

document.write("a) la cantidad de números pares: " + contador + "<br> b) el promedio de todos los números ingresados: " + (numerototal/contador2) + "<br> c) la suma de todos los números: " + numerototal + "<br> d) El número máximo: " + maximo + "<br> d) El número minimo: " + minimo );

}

