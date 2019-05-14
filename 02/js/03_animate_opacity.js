$(document).ready(function(){
    $("#animate").click(function(){
        $("#content").animate({"opacity":"0.5"}, "slow");
        $("#content").animate({"opacity":"1"}, "slow");
    });
});