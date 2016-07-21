//-----FUNCIONAMIENTO DE METODOS PARA SCROLL-----//

//scrollTop(): toma la posicion actual de la barra de desplazamiento desde el top de la pagina

//offset(): calcula la posicion en el eje x o y de un elemento en la pagina, 
//ej: .offset().top devuelve la posicion del elemento respecto al top de la pagina (.top es un valor del metodo .offset())

//scroll(): Es el evento, cuando el usuario hace scroll ejecuta algo


$(document).ready(function() {
	
	if ( $('#init_popUp').length > 0 ) {
		showPopup('#init_popUp');
	}

});



function showPopup(idContainer) {

	$(idContainer).find('img').addClass('getPopUp');

	$('img.getPopUp').each( function(i) {

		var thisElement = $(this);
		var contentPopUp = thisElement.siblings('.contentPopUp');
		var innerPopUp = contentPopUp.html();
		$(contentPopUp).html('<div class="overlay"></div><div class="container">' + innerPopUp + '</div>')

		$(thisElement).on('click', function() {
		 	$(contentPopUp).fadeIn();
		});

		$('.overlay').on('click', function(){
			$(contentPopUp).fadeOut();
		});

	});
		
	
}