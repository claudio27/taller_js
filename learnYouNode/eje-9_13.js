var http = require('http');
var bl = require('bl');
var url_1 = process.argv[2];
var url_2 = process.argv[3];
var url_3 = process.argv[4];
var contador = 0 ;
var pagina1, pagina2, pagina3;



http.get(url_1, function(response){

	response.pipe(bl(function(error,data){
		pagina1 = data.toString();
			contador++;
	}));


// http.get(url_2, function(response){

// 	response.pipe(bl(function(error,data){
// 		pagina2 = data.toString();
// 			contador++;
// 	}));

// http.get(url_3, function(response){

// 	response.pipe(bl(function(error,data){
// 		pagina3 = data.toString();
// 			contador++;
// 	}));



// if(contador === 3){
// 	console.log(pagina1);
// 	console.log(pagina2);
// 	console.log(pagina3);
// }



