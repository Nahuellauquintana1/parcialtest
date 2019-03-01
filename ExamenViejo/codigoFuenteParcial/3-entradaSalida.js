//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo = parseFloat(document.getElementById("largo").value);
    var ancho = parseFloat(document.getElementById("ancho").value);
    var perimetro = (largo + ancho) * 2;
    alert("Se necesitan " + (perimetro*6) +" metros de alambre para darle 6 vueltas a el perimetro del terreno ingresado" )
}

