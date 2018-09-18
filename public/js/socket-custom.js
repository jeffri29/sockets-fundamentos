var socket = io();

// Los on son para escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
})

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jeffrey',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
})