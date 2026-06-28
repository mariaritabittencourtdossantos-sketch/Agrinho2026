// Controle do modo escuro

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

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