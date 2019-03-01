//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() 
{
    var nota;
    var sexo;
    var contador = 0;
    var notabaja;
    var notatotal = 0;
    for (var i = 1; i <= 6; i++) {
        nota = parseInt(prompt("Ingrese la nota"));
        while (nota <= 0 || nota >=10 || isNaN(nota)) {
            nota = parseFloat(prompt("Ingrese una nota VALIDA"));
        }
        sexo = prompt("ingrese el sexo");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese una sexo VALIDO");
        }
        if (i == 1) {
            notabaja = nota;
        }
        if (sexo == "m" && nota >= 6) {
            contador++;
        } else if (nota < notabaja) {
            notabaja = nota;
        }
        notatotal = notatotal + nota;
    }
    document.write("El promedio de las notas es: " + (notatotal / 6) + "<br> La nota mas baja fue: " + notabaja + "<br> La cantidad de varones cuya nota fue igual o mayor a 6: " + contador);


}

