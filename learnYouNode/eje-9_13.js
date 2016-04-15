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




//  Este ejercicio es similar al anterior puesto que debes usar http.get().
//  Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.

//  Tu programa deberá imprimir el contenido de cada una de las URLs en
//  consola en el mismo orden que fueron recibidos los argumentos. No deberás
//  imprimir el largo, solo el contenido como String, pero debes respetar el
//  orden de llegada de los argumentos.

// ─────────────────────────────────────────────────────────────────────────────

// ## PISTAS

//  Como las llamadas a las URLs son asíncronas, es probable que no recibas
//  las respuestas en orden por lo que no puedes imprimir las respuestas a
//  medida que llegan.

//  Tendrás que encolar los resultados y mantener un contador de cuántas
//  peticiones han sido recibidas de modo que al llegar al final puedas
//  imprimir los resultados.

//  En la vida real, hay varias librerías como [async](http://npm.im/async) y
//  [after](http://npm.im/after) que facilitan la continuación de los
//  callbacks. Para el alcance de este ejercicio no es necesario usar
//  librerías externas.

// ─────────────────────────────────────────────────────────────────────────────