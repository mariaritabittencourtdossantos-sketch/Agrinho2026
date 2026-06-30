// Botão de modo escuro

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});

function darBoasVindas() {
    let nome = document.getElementById("nomeUsuario").value;

    if (nome !== "") {
        document.getElementById("mensagem").innerHTML =
            "Bem-vindo, " + nome + "! Vamos aprender!";
    } else {
        document.getElementById("mensagem").innerHTML =
            "Digite seu nome.";
    }
}

// Controle do tamanho da fonte

let tamanhoFonte = 16;

document.getElementById("aumentarFonte")
.addEventListener("click", function(){

    tamanhoFonte += 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";

});

document.getElementById("diminuirFonte")
.addEventListener("click", function(){

    tamanhoFonte -= 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";

});