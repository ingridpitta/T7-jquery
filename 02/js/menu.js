$(document).ready(function(){
    // $("li").hover(function(){
    //     $(this).find(".menu2" ).show(this)
    // }, function(){
    //     $(this).find(".menu2" ).hide(this)
    // });

    $("li").click(function(){
        $(this).find(".menu2" ).slideToggle();
        $(this).siblings().find(".menu2" ).slideUp(); // siblings == irmãs
    });

});

