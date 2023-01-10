// alerta de cadastro realizado na página de cadastro

const nomeCadastro = document.querySelector('#nome-cadastro');
const emailCadastro = document.querySelector('#email-cadastro');
const senhaCadastro = document.querySelector('#senha-cadastro');
const telefoneCadastro = document.querySelector('#telefone-cadastro');
const botaoCadastro = document.querySelector('#botao-cadastro');

botaoCadastro.onclick = function(){
    if(emailCadastro.value != "" && nomeCadastro.value != "" && senhaCadastro.value != "" && telefoneCadastro.value != ""){
        alert("Cadastro realizado com sucesso!");
    }
}
