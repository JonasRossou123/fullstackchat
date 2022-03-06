let socket = io.connect();
let echoBot = 'EchoBot';
let sendToMe = document.getElementById('sendToMe');
let targetMessage = document.getElementById('targetMessage');

sendToMe.addEventListener('click', function() {
    let message = document.getElementById("message").value;
    document.getElementById("message").value = "";
    socket.emit('sendToMe', {message: message, name: echoBot});
});

socket.on('displayMessage', (data) => {
    targetMessage.innerHTML += data.name + ': ' + data.message + '<br>';
});
