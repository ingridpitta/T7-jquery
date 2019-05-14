// var btn = document.querySelectorAll("button");

// for (i=0; i< btn.length; i++){
//     btn[i].textContent = "BATATA"
// }; mudar o texto dos btn com javascript
$(document).ready(function(){
    alert("Método de Iniciação do jQuery Dentro da Página")
}); //Sintaxe jQuery

$("p").click(function(){
    alert("P Clicado")
}); //Sintaxe jQuery; está sem efeito pois o elemento não existe no HTML

$(document).ready(function(){
    $("input").focus(function(){ // evento de seleção / click
        $(this).toggleClass("fundoVerde")
    });
    $("input").keyup(function(){ //evento de teclado
        alert("Dígito Reconhecido!") 
    });
}); //Sintaxe jQuery; está sem efeito pois o elemento não existe no HTML

$("button").text("BATATA2");  //jquery sendo usado para executar a mesma função feita com javascript acima.

$("div").text("Novo Texto na DIV"); // mudar o texto da div

$("li").text("Novo Texto"); // mudar os textos do li

$(".lista1").find(".botao").text("Teste"); // mudar o btn dentro da lista método 1

$(".lista2 > .botao").text("Teste") // mudar btn dentro da lista método 2

