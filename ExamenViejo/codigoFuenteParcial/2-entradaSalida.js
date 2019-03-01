//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio = parseFloat(prompt("Ingrese el valor del producto"));
    var iva = precio * 0.21;
    document.getElementById("importe").value = precio + iva;





}

