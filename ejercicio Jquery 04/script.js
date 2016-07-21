$(document).ready( function(){

	$('#main_btn').on('click', function() {

		event.preventDefault();

		//datos personales------------------//
		var dataName = $('#name').val();
		var dataSurname = $('#surname').val();
		var dataAge = $('#age').val();
		//datos fisicos------------------//
		var dataHair = $('#hair_color').val();
		var dataEyes = $('#eyes_color').val();
		var dataSize = $('#size').val();
		
		showData(dataName, dataSurname, dataAge, dataHair, dataEyes, dataSize);
		//getDataProcess();
		//return false;
	});

});




function showData(name, surname, age, hair, eyes, size) {
	
	//var test = 'test';
	var objectPerson = Array (
		{
			'nombre':name,
			'apellido':surname,
			'edad':age 
		},

		{
			'pelo':hair,
			'ojos':eyes,
			'altura':size
		}
	)

	$('#dinamic_content').append('<td>'  '</td>');

	
	getDataProcess(objectPerson);
	

}


function getDataProcess(objectPerson) {

	// if (objectPerson[0] == ''&& objectPerson[1] == '') {
	// 	console.log('Hola test');
	// }; 


	//console.log(objectPerson[0]['nombre']);
	$('#content-message').append('<div><p>Tu nombre es ' + objectPerson[0]['nombre'] + ' ' +  objectPerson[0]['apellido'] + ' y tenes ' + objectPerson[0]['edad'] + ' de edad, tu pelo es ' + objectPerson[1]['pelo'] + ' y tus ojos ' + objectPerson[1]['ojos'] + '</p></div>')


}



