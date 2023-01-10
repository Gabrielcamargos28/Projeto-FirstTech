const botaoContato = document.querySelector('#botao-contato');
const nomeContato = document.querySelector('#nome-contato');
const emailContato = document.querySelector('#email-contato');
const telefoneContato = document.querySelector('#telefone-contato');
const assuntoContato = document.querySelector('#assunto-contato');
const mensagemContato = document.querySelector('#mensagem-contato');

botaoContato.onclick = function(){
    if(telefoneContato.value != "" && nomeContato.value != "" && emailContato.value != "" && assuntoContato.value != "" && mensagemContato.value != ""){
        alert('Contato realizado com sucesso!\nVocê terá o retorno em breve!');
    }
}

