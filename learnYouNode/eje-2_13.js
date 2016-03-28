// Esta correcta
//console.log(+process.argv[2] + +process.argv[3])

//console.log(process.argv.length)

//console.log( Number(process.argv[2]) + Number(process.argv[3]) ) 

/** Solucion de learnyounode */

    var result = 0

    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])

    console.log(result)