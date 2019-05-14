$(document).ready(function(){
    $("#animate").click(function(){
        $("#content").animate({"width":"800px"}, "slow");
        $("#content").animate({"width":"300px"}, "slow");
    });
});