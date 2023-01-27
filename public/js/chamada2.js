var socket = io();
var input = document.getElementById('senha');
var btn = document.getElementById('enviar');

function enviarSenha2() {
  var senha = input.value;
  socket.emit('senha2', senha);
}



btn.addEventListener('click', enviarSenha2);