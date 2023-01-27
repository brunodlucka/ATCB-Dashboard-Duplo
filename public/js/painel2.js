var socket = io();

socket.on('painel', (data) => {
  mostrarSenha(data);
});

socket.on('ultimaSenha', (data) => {
  document.getElementById('senha').innerHTML = data;
});

function mostrarSenha(value) {
  var bgDiv = document.getElementById('bg2');
  document.getElementById('senha2').innerHTML = value;
  bgDiv.classList.add('alerta-senha');
  som();
  setTimeout(() => {
    bgDiv.classList.remove('alerta-senha');
  }, 8000);
}


