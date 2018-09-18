const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
// Acá montamos el servidor, con todas las configuraciones que hagamos en express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar socket.io
// Esta es la comunicación del backend
module.exports.io = socketIo(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});