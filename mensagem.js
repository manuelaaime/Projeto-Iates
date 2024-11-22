function enviarMensagem() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('msg').value;


    var mensagemObj = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    inserirMensagem(mensagemObj);

    alert("Mensagem Enviada")
}

function inserirMensagem(mensagem) {

    var inserir = $.ajax({

        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}
window.onload = function() {
    obterMensagens();
};