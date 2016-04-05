var http = require('http');
var bl = require('bl');
var url = process.argv[2];
var buffer;



http.get(url, function(response){

	response.pipe(bl(function(error,data){
		// console.log(data.length)
		console.log(data.toString().length)
		console.log(data.toString())
	}))

	// response.on('end', function(datos){
		
	// 	console.log(buffer.length)
	// 	console.log(buffer)
	// })



}).on('error', function(e){
	console.log('Hay un error: ' + e.message);
})


/*

  # PASO Su solución a HTTP COLLECT pasó sin problemas!

  Aqui está la solución oficial si desea comparar notas:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')
     var bl = require('bl')

     http.get(process.argv[2], function (response) {
       response.pipe(bl(function (err, data) {
         if (err)
           return console.error(err)
         data = data.toString()
         console.log(data.length)
         console.log(data)
       }))
     })

─────────────────────────────────────────────────────────────────────────────

 ## HTTP COLLECT (Ejercicio 8 de 13)

  Escribe un programa que realice una petición HTTP GET a una URL provista
  como primer argumento del programa. Almacena todos los datos recibidos del
  servidor, es decir no sólo el primer evento "data", y luego escribe a
  consola dos líneas:

   » En la primera escribe la cantidad de caracteres recibidos.
   » En la segunda escribe la totalidad de caracteres recibidos (todo el
     string).

 ─────────────────────────────────────────────────────────────────────────────

 ## PISTAS

  Hay por lo menos dos formas de resolver este problema:

  1) Almacenar los datos de todos los eventos "data" para luego agregarlos
  los resultados antes de imprimirlos por consola. Puedes usar el evento
  "end" para saber cuando terminas de recibir datos.

  2) Usa un paquete de terceros para evitar los problemas de almacenar el
  stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer
  List) o concat-stream.

  <http://npm.im/bl> <http://npm.im/concat-stream>

  Para instalar alguno de estos paquetes usa Node Package Manager npm de la
  siguiente forma:

     $ npm install bl

  Npm descargará el paquete e instalará la última versión disponible en la
  carpeta node_modules. Todos los paquetes instalados ahí pueden cargarse
  desde tu programa usando require sin prefijo. Ejemplo:

     var bl = require('bl')

  Node busca primero en su núcleo de módulos y si no lo encuentra busca en
  node_modules.

  En caso de no tener conexión a Internet, simplemente crea una carpeta
  node_modules y copia el paquete desde el directorio de instalación de
  learnyounode, es decir:

  file://C:\Documents and Settings\cserrano_ex\Datos de
  programa\npm\node_modules\learnyounode\node_modules\bl file://C:\Documents
  and Settings\cserrano_ex\Datos de
  programa\npm\node_modules\learnyounode\node_modules\concat-stream

  Ambos paquetes pueden usar un stream piped para capturar los datos. Una
  vez que se acaba el stream se dispara un callback con todos los datos:

     response.pipe(bl(function (err, data) { /* ... / }))
     // or
     response.pipe(concatStream(function (data) { /* ... / }))

  Recuerda hacer data.toString() para convertir al Buffer de Node a String.

  Puedes leer la documentación de ambos módulos en la carpeta de instalación
  de learnyounode en:

  file://C:\Documents and Settings\cserrano_ex\Datos de
  programa\npm\node_modules\learnyounode\docs\bl.html file://C:\Documents
  and Settings\cserrano_ex\Datos de
  programa\npm\node_modules\learnyounode\docs\concat-stream.html

 ─────────────────────────────────────────────────────────────────────────────




 */