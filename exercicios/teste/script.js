document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Obrigado pelo contato! Sua mensagem foi enviada.');
});
