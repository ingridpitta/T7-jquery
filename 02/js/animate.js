$(document).ready(function(){
    $("a").click(function(){
// Checar se existe um HASH, caso tenha ele cai no IF, senão ele funciona como um link normal
        if(this.hash !== ""){
            let hash = this.hash;
            $("html, body").animate({scrollTop: $(hash).offset().top}, 800, function(){
                // Coloca na url do navegador
                window.location.hash = hash;
            });
        };
    });
});