/*
const WebSocket = require('ws');
const server = new WebSocket.Server({port:8080});

server.on('connection', socket => {
    socket.on('message', message => {
        socket.send(`Roger that! ${message}`);
    });
});
*/

const express = require('express');
const http = require('http');
const app = express(); //to define our application
const server = http.createServer(app); //To use http to serve the app that express provides
const io = require('socket.io')(server);
const clientPath = `${__dirname}/../client`;

const PORT = 8080;
//require('dotenv').config();

//app.use(express.static('public')); //To use express to host the client
app.use(express.static(clientPath));

io.on('connection', (socket) => {
    console.log('someone connected');

    socket.on('sendToMe', (message) => {
        socket.emit("displayMessage", message)
    });

    //let name = socket.id
});

server.listen(PORT, () => {
    console.log("server running on " + PORT);
});