// alerta de login realizado na página de login

const emailLogin = document.querySelector("#email-login");

const senhalogin = document.querySelector("#senha-login");

const botaoLogin = document.querySelector("#botao-login");

botaoLogin.onclick = function () {
    if (emailLogin.value != "" && senhalogin.value != "") {
        alert("Login realizado com sucesso!")
    }
}

