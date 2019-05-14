$(document).ready(function(){
        let qtdPalavras = $(".frase-correta").text().split(" ").length; 
        console.log(qtdPalavras)
        // Pegue a let qtdPalavras e faça um array a partir do texto;
        // let qtdPalavras = tamanho da classe frase-correta;
        // split separa as palavras em um array enquanto o trim elimina os espaços;
        // split está separando a cada espaço "split(" ")" agora a cada vírgula "split(","); 
        // separador == espaço, vírgula, letra...absolutamente qualquer caractere;
        $(".qtdPalavras").html(qtdPalavras);

        $(".campo-digitacao").on("input", function(){
            // Ao digitar algo no input execute a função abaixo
            $(".texto-digitado").text($(this).val());
        // Pegue o valor que está no campo do input e mostre aqui
    });
});