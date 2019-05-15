const app = document.getElementById("root"); // APP == DIV no Body
const container = document.createElement("div"); // Criar uma DIV Container

app.appendChild(container); // APP está contida na DIV Container

let request = new XMLHttpRequest(); // let Request é uma requisição em formato XML feita usando protocolo HTTP

request.open("GET", "https://jsonplaceholder.typicode.com/photos", true); // Faça uma requisição do tipo GET (Método GET) no endereço estipulado
request.onload = function(){ // onload acontece enquanto se está conectado
    let photos = JSON.parse(this.response) // Transforme a resposta em JSON

    if(request.status >=200 && request.status <400){ // Verificar status da requisição de acordo com os códigos do protocolo HTTP
       photos.forEach(function(photo){ // Para cada elemento da lista JSON obtida como resposta da requisição
            const conteudo = document.createElement("div"); // Crie uma div
            conteudo.setAttribute("class","photo" + photo.id); // Com class == "photo" + id da photo (Json)

            const h2 = document.createElement("h2"); // Crie um h2
            h2.textContent = photo.title; // Conteúdo de h2 é o titulo da photo (JSON)
            
            const img = document.createElement("img"); // Crie um elemento imagem
            img.setAttribute("src", photo.url); // Com class == url da photo (Json)

            container.appendChild(conteudo); // Conteudo deve ser colocado dentro de container
            conteudo.appendChild(h2); // H2 deve ser colocado dentro de conteudo
            conteudo.appendChild(img); // Img deve ser colocado dentro de conteudo
       });
    }else{ // ERRO, deve aparecer a mensagem abaixo
        const errorMessage = document.createElement("img"); // Criar imagem para exibir mensagem de erro
        errorMessage.setAttribute("src", "http://http.cat/" + request.status); // Conteúdo da imagem da mensagem de erro de acordo com o status da requisição
        app.appendChild(errorMessage); // Deve ser inserida na DIV app
    }
};

request.send(); // Enviar a requisiçaão; executar!