$(document).ready(function(){

 	


	$('.link1').on('click', function() {
		event.preventDefault();


		var myArray = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'viernes'];

		for(var i=0; i<myArray.length; i++) {
			

			// var positionDay = myArray.indexOf(myArray[i]);
			// var secondDay = myArray.length - 3;

			// alert(secondDay);
			var itemClass = 'day';

			if ( (i+1)%2 == 0) {
			 	itemClass += " secondDay";
			};
			
			$('.main_container').append('<div><p class="'+itemClass+'">'+ myArray[i] +'</p></div>');		
		}


	});


// logica basica: tomar datos + procesarlos + imprimirlos




//function ejemploFor() {

// 	var palabra = 'Esternocleidomastoideo';
// 	var subpalabra = new Array();
// 	subpalabra[0]='';
// 	var msg = 'Diez primeras letras: \n\n';
	
// 	for (var i=1; i<=10; i++)
// 		{subpalabra[i] = subpalabra[i-1] + palabra.charAt(i-1);}
	
// 	for (var i=1; i<=10; i++)
// 		{msg = msg + subpalabra[i] +'\n';}
	

// 	msg = msg + '\nPalabra al revés: \n\n';
// 	for (var i=palabra.length; i>0; i--){
// 	msg = msg + palabra.charAt(i-1);

// }



// cierra document.ready
});