//-----FUNCIONAMIENTO DE METODOS PARA SCROLL-----//

$(document).ready(function() {
	hideAllItems();
	eachBtn();
	eachItem();
	showEachItem();
});

////////////////////////////////////////
function hideAllItems() {
	$('.itemContent').each(function() {
		$(this).hide();
	});
}////////////////////////////////////////


function eachItem() {
	$('.itemContent').each(function(i) {
		$(this).addClass('item-' + i);
	});
}


function eachBtn() {
	$('.btnImg').each(function(i) {
		var elementPosition = $(this).data('position', 'item-' + i);
	});
}


function showEachItem(getElementPosition) {
	$('.btnImg').click(function() {
		var getElementPosition = $(this).data('position');
	    $('.' + getElementPosition).show('slow');
	});
}


//  http://jsfiddle.net/n53qg/