$(document).ready(function() {
	
	var idContItems = $('#cont_items');
	var idContent = $('#content_filter');
	
	getData(idContItems, idContent);
	
});


function getData(idContItems, idContent) {
	var itemContent = $(idContent).children('div');
	var getItemMenu = $(idContItems).children('li a');

	$(getItemMenu).addClass('list_item');
	$(itemContent).addClass('content_item');

	var getItemText = $(getItemMenu).text().toLowerCase();
	var transformArray = $.makeArray(getItemMenu);
	
	var testClass = $(getItemMenu).each(function(){
						var test = $(this).text();
						return test;
					});

	console.log(testClass);

	$(itemContent).each(function(){
		$(this).addClass(function(){
			//return testClass;
		});
	});

};

