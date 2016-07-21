// $(document).ready(function(){

// 	$(window).scroll(mainScroll);

// });


// function mainScroll() {
// 	var scrollWindow = window.pageYOffset;
// 	var passItemsArray = [];

// 	unPaintLink();

// 	$('.ancla').each(function (){

// 		var thisElement = $(this);
// 		var srcollSection = thisElement.offset().top;
// 		var thisElID = thisElement.attr('id');
// 		var thisElementAnchor = $('#menu a[href="#'+thisElID+'"]');

// 		var thisElementArray = { 
// 			scrollVal : srcollSection,
// 			anchor : thisElementAnchor
// 		};

// 		if (srcollSection <= scrollWindow) {
// 			passItemsArray.push(thisElementArray);
// 		}

// 	});

// 	if(passItemsArray.length > 0){

// 		var maxItemScroll = passItemsArray[0]['scrollVal'];
// 		var maxItemAnchor = passItemsArray[0]['anchor'];

// 		for (var i = 0; i < passItemsArray.length; i++) {

// 			if( passItemsArray[i]['scrollVal'] > maxItemScroll ){
// 				maxItemScroll = passItemsArray[i]['scrollVal'];
// 				maxItemAnchor = passItemsArray[i]['anchor'];
// 			}

// 		}

// 		paintLink(maxItemAnchor);
// 	}


// }



// function paintLink (thisAnchor) {
// 	thisAnchor.css('color','red');
// }

// function unPaintLink(){
// 	$('#menu a').css('color','#000');
// }





// var cosas = ["ddd", "ghhh"];

// for (var i = 0; i < cosas.length; i++) {

// 	$('.padredivAlgo').eq(i).html( cosas[i] );

// }




//-----FUNCIONAMIENTO DE METODOS PARA SCROLL-----//

//scrollTop(): toma la posicion actual de la barra de desplazamiento desde el top de la pagina

//offset(): calcula la posicion en el eje x o y de un elemento en la pagina, 
//ej: .offset().top devuelve la posicion del elemento respecto al top de la pagina (.top es un valor del metodo .offset())

//scroll(): Es el evento, cuando el usuario hace scroll ejecuta algo


$(document).ready(function() {
	//$(window).scroll(mainScroll);
	//functionTest();
	functionTest2();
});




//----- EJERCICIO 1 pasar los datos de un array a otro que esta vacio -----//

// function functionTest() {


// 	var myArray = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// 	var myEmptyArray = [];

// 	for (var i = 0; i < myArray.length; i++) {
// 	 	alert(myArray[i]);
// 	 	myEmptyArray.push(myArray[i]);
// 	 	console.log(myEmptyArray);
// 	};


// };







//----- EJERCICIO 2 crear un array con elementos del DOM, loopearlos e incrementar el valor del item de 1 en 1 -----//

function functionTest2() {

	//var myEmptyArray = [];
	//var itemsMenu = $('#menu a');
	//var makeMenuArray = $.makeArray(itemsMenu);

 		
 		
	
$('#main_btn').on('click', function() {
		event.preventDefault();
	

}

	// $('#first_text').animate({
	
	//    'border-bottom-width': "20",
	
	//    'font-size': '25pt'
	
	// });



//-----FUNCIONAMIENTO DE METODOS PARA SCROLL-----//

//scrollTop(): toma la posicion actual de la barra de desplazamiento desde el top de la pagina

//offset(): calcula la posicion en el eje x o y de un elemento en la pagina, 
//ej: .offset().top devuelve la posicion del elemento respecto al top de la pagina (.top es un valor del metodo .offset())

//scroll(): Es el evento, cuando el usuario hace scroll ejecuta algo


		});




// 		// Definición de la función
// function suma_y_muestra(primerNumero, segundoNumero) { 
//   var resultado = primerNumero + segundoNumero;
//   alert("El resultado es " + resultado);
// }
 
// // Declaración de las variables
// var numero1 = 3;
// var numero2 = 5;
 
// // Llamada a la función
// suma_y_muestra(numero1, numero2);



		//$(this).css('color','red');
	
});

		


		// $('#menu a').each(function(i){
		// 	var itemHref = $(this).attr('href');
		// 	console.log('Ruta del link' + ' ' + i + ' : ' +  itemHref);
		// });



	// $("a").each(function(i){
 	// var titulo = $(this).attr("title");
 	// alert("Atributo title del enlace " + i + ": " + titulo);
 	// });
	


	
	//var arrayLength = makeMenuArray.length;

	//console.log(makeMenuArray);

	// for (var i = 0; i < makeMenuArray.length; i++) {
	// 	var counter = i;
	// 	counter++
	// 	if (makeMenuArray[i]) {
	// 		$('#menu').append('<li><a href="#item4">item' + counter + '</a></li>')
	// 	};
	// };



};

