//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
    var contador2;
	var maximo;
    var minimo;
    
    for(i = 1; i <= 7; i++){
        ventas = parseFloat(prompt("Ingrese el importe de las ventas"));
    
    while(ventas < 0 || isNaN(ventas)){
        ventas = parseFloat(prompt("Ingrese el importe de las ventas VALIDO"));
    }

    if(i == 1){
        maximo = ventas;
        minimo = ventas;
    }
    if(ventas > maximo){
        maximo = ventas;
        
    }else if(ventas < minimo){
        minimo = ventas;
    }
  
}
	document.write("El mayor importe de ventas fue: " + maximo + " en el dia: " + dia +" <br> El menor importe de ventas fue: " + minimo );

}

