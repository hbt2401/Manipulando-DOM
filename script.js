var nome = document.getElementById("nome");
var cor = document.querySelector("#cor");
var botao = document.querySelector("#btn");
var titulo = document.getElementById("titulo");

botao.addEventListener('click', function (e) {
    e.preventDefault();

  alert(nome.value);
    nome.focus();
});

cor.addEventListener('change',function(){
    alert(cor.value);
    titulo.style.color =  cor.value;

    document.body.style.backgroundColor = cor.value;

});

window.onload = function(){
    var corFav = prompt('Qual sua cor favorita: ');
    var px =  prompt("Digite um alor de posição eixo X: ");
    var py =  prompt("Digite um alor de posição eixo y: ");

    var alvo = document.querySelector("#alvo");


    alvo.sytle.backgroundColor = corFav;

    alvo.style.marginLeft = px +"vh";

    alvo.style.marginTop = py + "vh";


}