var lib = require('./lib');
var path = process.argv[2];
var ext = process.argv[3];


lib(path, ext, function(err, files){

	for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
	};
});


/***
 Aqui está la solución oficial si desea comparar notas:

─────────────────────────────────────────────────────────────────────────────
 _C:\Documents and Settings\cserrano_ex\Datos de
 programa\npm\node_modules\learnyounode\exercises\make_it_modular\solution\
 solution.js_ :

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })

─────────────────────────────────────────────────────────────────────────────
 _C:\Documents and Settings\cserrano_ex\Datos de
 programa\npm\node_modules\learnyounode\exercises\make_it_modular\solution\
 solution_filter.js_ :

    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

─────────────────────────────────────────────────────────────────────────────

*/
