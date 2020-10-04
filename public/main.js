const form = document.getElementById('form-chat');
const messages = document.querySelector('.messages');
const socket = io();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;

    socket.emit('message', msg);
});

socket.on('message', data => {
    displayMsg(data);
});

function displayMsg(msg){
    const message = document.createElement('div');
    message.innerHTML = `<p>Rajatha <span>12.43</span></p> <P>${msg}</P>`;
    messages.appendChild(message);
}