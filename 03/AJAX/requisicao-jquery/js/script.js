$(document).ready(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos", 
        type: "GET",
        success: function(photos){
            let container = $("<div>");
            container.attr("class", `photo${this.id}`);
            let photoTitle = $("<h2>").text(this.title);
            let photoImg = $("<img>").attr("src", this.url);

            container.append(photoTitle).append(photoImg);
            $("#root").append(container);

        },
        erro: function(req){
            let errorImage = $("<img>").attr("src", `https://http.cat${req.status}`);
            $("#root").append(errorImage);
        }
    });
});
