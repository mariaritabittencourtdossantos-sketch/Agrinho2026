// Controle do modo escuro

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});

// Formulário personalizado

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
    "Olá, " + nome + "! Obrigado por apoiar a agricultura familiar.";

});

// Controle de fonte

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