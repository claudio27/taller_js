// MY FIRST ASYNC I/O!


var fs = require('fs');
var file = process.argv[2];


// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

 // Si paso el parametro 'utf8', retorna un String
 numbers = fs.readFile(file, 'utf8', function (err, data){ // La funcion puede ser anonima y tambien funciona
				if(err != null){
				 	console.log(err);
				}else{
					console.log(data.split('\n').length - 1);
				}
			});		


/**
	Solucion 

─────────────────────────────────────────────────────────────────────────────

     var fs = require('fs')
     var file = process.argv[2]

     fs.readFile(file, function (err, contents) {
       // fs.readFile(file, 'utf8', callback) también se puede utilizar
       var lines = contents.toString().split('\n').length - 1
       console.log(lines)
     })

 ─────────────────────────────────────────────────────────────────────────────


*/						