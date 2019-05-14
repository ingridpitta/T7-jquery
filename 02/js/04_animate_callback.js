$(document).ready(function(){
    $("#animate").click(function(){
        $("#content").animate({"opacity":"0.5"}, 1000);
        $("#content").animate({"opacity":"1"},1000);
        $("#content").animate({"width":"80%", "height" : "80%"}, 1000, function(){
            $(this).html("Animação em Andamento!"); // Essa funcção ao final da animação é o callback!
        });
        $("#content").animate({"width":"50%", "height" : "50%"}, 1000, function(){
            $(this).html("Animação Finalizada!"); // Essa funcção ao final da animação é o callback!
        });
    });
});