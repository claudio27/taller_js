var fs = require('fs');
var pathMod = require('path');

module.exports = function(ruta, extension, callback	){
	fs.readdir(ruta, function(error, archivos){
		if (error) {
			callback(error, null);
		}else{
			resultado = [];

			    for( i = 0; i < archivos.length ; i++){

			  		if (pathMod.extname(archivos[i]) == '.' + extension) {
			  			
			  			resultado.push(archivos[i]);

			  		};

				};

				callback(null, resultado);
			
		};


	});
};


