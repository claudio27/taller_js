var fs = require('fs');
var pathMod = require('path');

var path = process.argv[2];
var ext = process.argv[3];
	ext = '.' + ext;

// console.log( 'ruta ' + path + ' extension ' + ext  );
	

file = fs.readdir(path, function(error, list){

	// for (var i = list.length - 1; i >= 0; i--) {
    for( i = 0; i < list.length ; i++){
		// console.log( 'mod ' +pathMod.extname(list[i]) );
		if (pathMod.extname(list[i]) == ext) {
			
			console.log(list[i]);

		};

	};

});



// var fs = require('fs');

// var dirname = process.argv[2];
// var ext = process.argv[3];
// var pat = RegExp('\\.' + ext + '$');

// file = fs.readdir(dirname, function(err, files) {
//   for (i = 0; i < files.length; i++) {
//     if (pat.test(files[i])) {
//       console.log(files[i]);
//     }
//   }
// });


/*  Aqui está la solución oficial si desea comparar notas:

 ─────────────────────────────────────────────────────────────────────────────

     var fs = require('fs')
     var path = require('path')

     fs.readdir(process.argv[2], function (err, list) {
       list.forEach(function (file) {
         if (path.extname(file) === '.' + process.argv[3])
           console.log(file)
       })
     })
*/