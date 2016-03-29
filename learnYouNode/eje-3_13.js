
// file://C:\Documents and Settings\cserrano_ex\Datos de programa\npm\node_modules\learnyounode\node_apidoc\fs.html
// file://C:\Documents and Settings\cserrano_ex\Datos de programa\npm\node_modules\learnyounode\node_apidoc\buffer.html

var fs = require('fs');
var file = process.argv[2];
// Probar usando comillas dobles
//var path = 'C:\Documents and Settings\cserrano_ex\Escritorio\nodeTest\learnYouNode\eje-2_13.js'; // No funciona
//var path = 'C:/Documents and Settings/cserrano_ex/Escritorio/nodeTest/learnYouNode/eje-2_13.js'; // Funciona
//var path = 'eje-2_13.js'; // Funciona
var buf = fs.readFileSync(file);
var str = buf.toString();

//console.log(str);

console.log(str.split('\n').length - 1 );  // Pero el archivo de test no tiene el delimitador '\n'
//console.log(buf.length);  


// fs.readFile("eje-2_13.js","utf8",function(err,data){
//     console.log("err: " + err);
//     console.log(data);
// });



/*var fs = require('fs');
var nombreArchivo = process.argv[2];

file = fs.readFileSync(nombreArchivo, function(err, data){
	console.log(data.toString().split('\n').length - 1) ;
}) ;*/



/*var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});*/

/*
var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);
*/

/**
	Solucion 

 var fs = require('fs')

 var contents = fs.readFileSync(process.argv[2])
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)

 // note you can avoid the .toString() by passing 'utf8' as the
 // second argument to readFileSync, then you'll get a String!
 //
 // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


*/