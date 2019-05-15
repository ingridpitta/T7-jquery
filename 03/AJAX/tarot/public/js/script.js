function carregaCarta(){
    $.getJSON("tarot.json", trocarCartaAleatoria)
};
    
function trocarCartaAleatoria(cartas, status){
    if(status == "success"){

        let numeroAleatorio = Math.floor(Math.random() * cartas.length);
        $(".titulo").text(cartas[numeroAleatorio].nome);
        $(".tipo").text(cartas[numeroAleatorio].tipo);
        $(".descricao").text(cartas[numeroAleatorio].descricao);
        $(".image").attr("src", cartas[numeroAleatorio].imagem);
        $(".saiba-mais").attr("href", cartas[numeroAleatorio].link);
    }else{
        $(".message").text("Não foi possível carregar a carta!");
    }
};

$(document).ready(function(){
    carregaCarta();
    $("#novaCarta").click(carregaCarta);
});