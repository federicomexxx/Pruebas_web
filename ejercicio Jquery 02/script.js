$(document).ready(function() {
	
	callSlider = $('#init_slider'); //obtengo el ID del contenedor gral del slider como variable global (para usarla en el resto del script)

	if ( $(callSlider).length > 0 ) { //compruebo si existe el slider
		defineSlider(callSlider);
	}

});




//FUNCION PARA DEFINIR EL SLIDER
function defineSlider(idContainer) {
	
	widthContainer = $(idContainer).width(); //obtengo el ancho del contenedor principal (idContainer) como variable global

	var itemSlider = $(idContainer).find('img').parent().addClass('item_slider'); //le asigno al div padre de cada img la clase "item_slider" 
	var innerItemSlider = $(idContainer).html(); //obtengo envuelvo html del contenedor gral del slider 
	var widthWindow = $(window).width(); //obtengo el ancho de la ventana del navegador
	var widthOuterWrapper = widthContainer*itemSlider.length; //defino el ancho del contenedor de los items del slider, que es 1 item multiplicado por la cantidad que hayan

	$(idContainer).html('<div class="outer_wrapper clearfix">' + innerItemSlider + '</div>'); //envuelvo a todos los items del slider en un contenedor con la clase "outer_wrapper"
	$('.outer_wrapper').css('width', widthOuterWrapper); //le defino el ancho al div que contiene los items (outer_wrapper) el ancho total de la cantidad de items

	$('.item_slider').css('width', widthContainer); //le defino el ancho a los items del slider para que sea igual al del contenedor

	//console.log(callSlider);

	moveItemsSlider();

}

//FUNCION PARA MOVER LOS ITEMS DEL SLIDER
function moveItemsSlider() {
	$(callSlider).append('<div class="container container_btn"></div>'); //creo un contenedor para los botones como append del contenedor principal
	$('.container_btn').html('<div class="btn btn-prev btn-danger"><</div><div class="btn btn-next btn-danger">></div>'); //agrego los 2 botones al contenedor de botones	
	
	var callItemSlider = $('.item_slider');
	var btnPrev = $('.btn-prev');
	var btnNext = $('.btn-next');
	var counterSlider = 0;
		
	$(btnNext).on('click', function() {
		counterSlider++;

		if(counterSlider >= callItemSlider.length){
			counterSlider = 0;
		}
		$('.outer_wrapper').css('margin-left', -widthContainer*counterSlider);
	});

	$(btnPrev).on('click', function() {
		counterSlider--;

		if(counterSlider < 0 ){
			counterSlider = callItemSlider.length - 1;
		}
		
		$('.outer_wrapper').css('margin-left', -widthContainer*counterSlider);
	});
			


}