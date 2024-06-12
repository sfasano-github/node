const http = require('http');

// Crear un objeto de servidor:
http.createServer(function (req, res) {
    res.write('Hello World!'); // Escribir una respuesta al cliente
    res.end(); // Terminar la respuesta
}).listen(process.env.PORT || 8080); // El objeto servidor escucha en el puerto especificado en la variable de entorno PORT o en el puerto 8080

// La consola imprimirá el mensaje
console.log('Server running at port', process.env.PORT || 8080);
