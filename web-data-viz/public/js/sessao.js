// sessão
// function validarSessao() {
//     var email = sessionStorage.EMAIL_USUARIO;
//     var nome = sessionStorage.NOME_USUARIO;

//     var b_usuario = document.getElementById("b_usuario");

//     if (email != null && nome != null) {
//         b_usuario.innerHTML = nome;
//     } else {
//         window.location = "../login.html";
//     }
// }

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


let contador = 0
function sortearMusica(cobaia){
    contador = contador + cobaia
    
    if(contador % 2 != 0){
        musica_atual.muted=false
        document.getElementById('tocador').classList.remove('invisivel')
        document.getElementById('tocador-botoes').classList.remove('invisivel')

    } else {
        document.getElementById('tocador').classList.add('invisivel')
        document.getElementById('tocador-botoes').classList.add('invisivel')
        musica_atual.muted=true
        return
    }
    
    let sorteio = parseInt(Math.random() * 17) + 1
    console.log(sorteio)
    sessionStorage.musica = sorteio

        gif_atual.src = "assets/gifs/character-music-gifs/"+sorteio+".gif" 

        musica_atual.src="./assets/musicas/"+sorteio+".mp3"

        musica_atual.play()
    
    if (sorteio == 1) {
        musica_nome.innerHTML = "Find your one way"
        personagem_nome.innerHTML = "Sol Badguy"
    }
    if (sorteio == 2) {
        musica_nome.innerHTML = "Roar of the Spark"
        personagem_nome.innerHTML = "Ky Kiske"
    }
    if (sorteio == 3) {
        musica_nome.innerHTML = "Mirror of the World"
        personagem_nome.innerHTML = "Baiken"
    }
    if (sorteio == 4) {
        musica_nome.innerHTML = "Alone Infection"
        personagem_nome.innerHTML = "Faust"
    }
    if (sorteio == 5) {
        musica_nome.innerHTML = "Armor-clad Faith"
        personagem_nome.innerHTML = "Potemkin"
    }
    if (sorteio == 6) {
        musica_nome.innerHTML = "Drift"
        personagem_nome.innerHTML = "Happy Chaos"
    }
    if (sorteio == 7) {
        musica_nome.innerHTML = "Just Lean"
        personagem_nome.innerHTML = "Johny"
    }
    if (sorteio == 8) {
        musica_nome.innerHTML = "Let me carve your way"
        personagem_nome.innerHTML = "Zato-1"
    }
    if (sorteio == 9) {
        musica_nome.innerHTML = "Love the Subhuman Self"
        personagem_nome.innerHTML = "Millia"
    }
    if (sorteio == 10) {
        musica_nome.innerHTML = "Necessary Discrepancy"
        personagem_nome.innerHTML = "Ramlethal"
    }
    if (sorteio == 11) {
        musica_nome.innerHTML = "Out of the Box"
        personagem_nome.innerHTML = "Axl"
    }
    if (sorteio == 12) {
        musica_nome.innerHTML = "Requiem"
        personagem_nome.innerHTML = "I-no"
    }
    if (sorteio == 13) {
        musica_nome.innerHTML = "The Disaster of Passion"
        personagem_nome.innerHTML = "May"
    }
    if (sorteio == 14) {
        musica_nome.innerHTML = "The Kiss of Death"
        personagem_nome.innerHTML = "Goldlewis"
    }
    if (sorteio == 15) {
        musica_nome.innerHTML = "Trigger"
        personagem_nome.innerHTML = "Giovanna"
    }
    if (sorteio == 16) {
        musica_nome.innerHTML = "Ups and Downs"
        personagem_nome.innerHTML = "Slayer"
    }
    if (sorteio == 17) {
        musica_nome.innerHTML = "Perfection can't please me"
        personagem_nome.innerHTML = "Jack-O"
    }


}


function mutar(){

    console.log('testeeeeeeeeeeeeee')
    if(musica_atual.muted==true){
        musica_atual.muted=false    
    }else{
        musica_atual.muted=true
    }
}




function select(id, nome, descricao){
console.log(id, nome, descricao)

gif_personagem.src="assets/gifs/character-idle-animations/"+id+".gif"
nome_personagem.innerHTML=nome
descricao_personagem.innerHTML=descricao

}