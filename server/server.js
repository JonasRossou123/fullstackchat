const express = require('express');
const http = require('http');
const app = express(); //to define our application
const server = http.createServer(app); //To use http to serve the app that express provides
const io = require('socket.io')(server);
const clientPath = `${__dirname}/../client`;
const PORT = 8080;

app.use(express.static(clientPath));

io.on('connection', (socket) => {
    console.log('someone connected');

    socket.on('sendToMe', (message) => {
        socket.emit("displayMessage", message)
    });
});

server.listen(PORT, () => {
    console.log("server running on " + PORT);
});
