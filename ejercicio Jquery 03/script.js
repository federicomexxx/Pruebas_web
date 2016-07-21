//Las funciones anonimas no aceptan variables globales???

$(document).ready(function() {

	$('.btn-danger').on('click', function() {
		
		var getName = $('#name').val();
		var getSurname = $('#surname').val();
		var getAge = $('#age').val();
		//var dataForm = [getName + ' ' + getSurname + ' ' + getAge];
		//alert(dataForm);

		if (getName == '' && getSurname == '' && getAge == '') {
			$('#content-message .row').html('<h3>Debe completar los campos</h3>');
		} 
		else if (getName == '') {
			$('#content-message .row').html('<h3>Debe completar el campo nombre</h3>');
		} 
		else if (getSurname == '') {
			$('#content-message .row').html('<h3>Debe completar el campo apellido</h3>');
		} 
		else if (getAge == '') {
			$('#content-message .row').html('<h3>Debe completar el campo edad</h3>');
		} 
		else {
			functionNumber01(getName,getSurname,getAge);
		};

	});
	
});





function functionNumber01(name,surname,age) {	
	$('#content-message .row').html('<h3>Buenos dias sr. ' + name + ', su apellido es ' + surname + ' y tiene ' +  age + ' anos.</h3>');
}








// $(document).ready(function() {

// 	$('.btn-danger').on('click', function() {
		
// 		var getName = $('#name').val();
// 		var getSurname = $('#surname').val();
// 		var getAge = $('#age').val();
// 		//var dataForm = [getName + ' ' + getSurname + ' ' + getAge];
// 		//alert(dataForm);

// 		if (getName == '' && getSurname == '' && getAge == '') {
// 			$('#init_script').append('<h3>Debe completar los campos</h3>');
// 		} else if (getName == '') {
// 			$('#init_script').append('<h3>Debe completar el campo nombre</h3>');
// 		} else if (getSurname == ''){
// 			$('#init_script').append('<h3>Debe completar el campo apellido</h3>');
// 		} else if (getAge == '') {
// 			$('#init_script').append('<h3>Debe completar el campo edad</h3>');
// 		} else {
// 			functionNumber01(getName,getSurname,getAge);
// 		};

// 	});
	
// });


