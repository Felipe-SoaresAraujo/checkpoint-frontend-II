
let btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function(event){
    event.preventDefault();
    
    //pegando os valores adicionados nos inputs pelo usuário
    let titulo = document.getElementById("titulo").value;
    let urlImg = document.getElementById("urlImg").value;
    let receita = document.getElementById("receita").value;

    //imprimindo na página - criando o card com os valores que o usuário adicionou no formulário
    let card = document.querySelector(".containerCard");
    card.innerHTML += `<article class="card">
                            <div class="divImg">
                                <img src="${urlImg}" alt="">
                            </div>
                            <div class="informacoes">
                                <h2 class="tituloCard">${titulo}</h2>
                                <p class="cardReceita">${receita}</p>
                            </div>
                        </article>`

});