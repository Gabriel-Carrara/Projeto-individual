
    // b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

    var nomes = [
            "Sol BadGuy", "Ky Kiske", "Baiken", "Faust", "Potemkin", 
            "Happy Chaos", "Leo Whitefang", "Zato-1", "Millia Rage", "Ramlethal", 
            "Axl Low", "I-no", "May", "Chipp Zanuff", "Giovanna", 
            "Slayer", "Jack-O", "Testament", "Nagoriyuki", "A.B.A"
        ];


    

function iniciar(){
        document.getElementById('inicio').classList.add('invisivel')
        document.getElementById('meio').classList.remove('invisivel')   
        textoDasQuestoes()    
    }

    let passoAtual = "pergunta_paciencia"

    const jsonComTudo = {
  "pergunta_paciencia": {
    "questao": "Qual é o seu nível de paciência?",
    "opcaoUm": "Zero paciência!",
    "opcaoDois": "Eu espero o momento certo.",
    "proximoUm": "pergunta_distancia",
    "proximoDois": "pergunta_conforto"
  },
  "pergunta_distancia": {
    "questao": "Como você prefere atacar?",
    "opcaoUm": "Colado no oponente.",
    "opcaoDois": "Qualquer distância.",
    "proximoUm": "pergunta_velocidade",
    "proximoDois": "pergunta_plano"
  },
  "pergunta_velocidade": {
    "questao": "O que você prioriza no combate?",
    "opcaoUm": "Velocidade extrema.",
    "opcaoDois": "Pressão constante.",
    "resultadoUm": 14,
    "proximoDois": "pergunta_direto"
  },
  "pergunta_direto": {
    "questao": "Prefere um estilo mais direto?",
    "opcaoUm": "Sim, ofensiva total.",
    "opcaoDois": "Não, prefiro focar em mobilidade.",
    "resultadoUm": 12,
    "proximoDois": "pergunta_estilo_mobilidade"
  },
  "pergunta_estilo_mobilidade": {
    "questao": "Que tipo de mobilidade você prefere?",
    "opcaoUm": "Velocidade aérea e fintas rápidas (Mix-up).",
    "opcaoDois": "Avanços com golpes de alto impacto.",
    "resultadoUm": 9,
    "proximoDois": "pergunta_impacto"
  },
  "pergunta_impacto": {
    "questao": "Como você quer causar impacto?",
    "opcaoUm": "Com golpes fortes e elegantes.",
    "opcaoDois": "Com âncoras e golfinhos.",
    "resultadoUm": 16,
    "resultadoDois": 13
  },
  "pergunta_plano": {
    "questao": "Quer um plano de jogo simples?",
    "opcaoUm": "Sim, direto ao ponto.",
    "opcaoDois": "Não, quero mecânicas complexas.",
    "proximoUm": "pergunta_risco",
    "proximoDois": "pergunta_treino"
  },
  "pergunta_risco": {
    "questao": "Gosta de arriscar tudo?",
    "opcaoUm": "Sim, aposto tudo!",
    "opcaoDois": "Não, prefiro consistência.",
    "resultadoUm": 7,
    "proximoDois": "pergunta_animais"
  },
  "pergunta_animais": {
    "questao": "Gosta de lutar com ajuda de animais?",
    "opcaoUm": "Sim!",
    "opcaoDois": "Não, prefiro resolver sozinho.",
    "resultadoUm": 15,
    "resultadoDois": 1
  },
  "pergunta_treino": {
    "questao": "Quanto tempo quer passar no treino?",
    "opcaoUm": "O básico.",
    "opcaoDois": "Vou morar no modo treino.",
    "resultadoUm": 20,
    "proximoDois": "pergunta_complexidade"
  },
  "pergunta_complexidade": {
    "questao": "O que você prefere?",
    "opcaoUm": "Invocar e comandar pequenos lacaios no mapa.",
    "opcaoDois": "Controlar dois personagens ao mesmo tempo",
    "resultadoUm": 17,
    "resultadoDois": 8
  },
  "pergunta_conforto": {
    "questao": "Qual sua zona de conforto?",
    "opcaoUm": "Perto ou Média distância.",
    "opcaoDois": "Longe do oponente.",
    "proximoUm": "pergunta_agarrao",
    "proximoDois": "pergunta_irritar"
  },
  "pergunta_agarrao": {
    "questao": "Gosta do arquetipo Grappler? (Exemplo: Zangieff)",
    "opcaoUm": "Sim!",
    "opcaoDois": "Não, prefiro usar técnicas.",
    "resultadoUm": 5,
    "proximoDois": "pergunta_honesto"
  },
  "pergunta_honesto": {
    "questao": "Busca um personagem 'honesto'?",
    "opcaoUm": "Sim, fundamentos são a base.",
    "opcaoDois": "Não, quero mecânicas variadas.",
    "proximoUm": "pergunta_contra_ataque",
    "proximoDois": "pergunta_improviso"
  },
  "pergunta_contra_ataque": {
    "questao": "Gosta de punir erros com contra-ataques fatais?",
    "opcaoUm": "Sim, vou no erro do oponente.",
    "opcaoDois": "Não, gosto de criar minhas próprias chances.",
    "resultadoUm": 3,
    "proximoDois": "pergunta_certeza"
  },
  "pergunta_certeza": {
    "questao": "Realmente quer ser honesto?",
    "opcaoUm": "Sim!",
    "opcaoDois": "Pensando bem, quero impacto.",
    "resultadoUm": 2,
    "resultadoDois": 19
  },
  "pergunta_improviso": {
    "questao": "Quanto você gosta de improvisar?",
    "opcaoUm": "Apenas o necessário.",
    "opcaoDois": "A partida inteira.",
    "resultadoUm": 10,
    "resultadoDois": 4
  },
  "pergunta_irritar": {
    "questao": "Quanto quer irritar o oponente?",
    "opcaoUm": "Só um pouco.",
    "opcaoDois": "Quero que ele desinstale o jogo.",
    "resultadoUm": 18,
    "proximoDois": "pergunta_vencer"
  },
  "pergunta_vencer": {
    "questao": "Você ainda quer ganhar?",
    "opcaoUm": "Sim, com eficiência.",
    "opcaoDois": "Não, prefiro irritar.",
    "resultadoUm": 6,
    "resultadoDois": 11
  }
}
    

function textoDasQuestoes(){
    let questao = jsonComTudo[passoAtual]

    texto_questao.innerHTML= questao.questao
    opcaoUm.innerHTML = questao.opcaoUm
    opcaoDois.innerHTML = questao.opcaoDois
}


function resposta(opcao){
    let questao = jsonComTudo[passoAtual]

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

    if(opcao == 1){
        console.log('cheguei no if 1')
        if(questao.resultadoUm!==undefined){
            console.log('cheguei no resultado 1')
            finalizar(questao.resultadoUm)
        } else {
            console.log('resposta deu certooooooooooooooooo')
            passoAtual = questao.proximoUm
            textoDasQuestoes()
        }
        
    } else {
        if(questao.resultadoDois!==undefined){
            finalizar(questao.resultadoDois)
        } else {
            console.log('resposta deu certooooooooooooooooo')
            passoAtual = questao.proximoDois
            textoDasQuestoes()
        }
    }
}


function finalizar(numero){
    let camminhoDoIcone = "../assets/imgs/character-icons/" + numero + ".png"

    document.getElementById('meio').classList.add('invisivel')   
    
    img_icone_quiz.src = camminhoDoIcone

    quiz_resultado_nome.innerHTML = nomes[numero-1] 
    
    document.getElementById('fim').classList.remove('invisivel')   

}


    // function publicar() {
    //     var idUsuario = sessionStorage.ID_USUARIO;

    //     var corpo = {
    //         titulo: form_postagem.titulo.value,
    //         descricao: form_postagem.descricao.value
    //     }

    //     fetch(`/avisos/publicar/${idUsuario}`, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(corpo)
    //     }).then(function (resposta) {

    //         console.log("resposta: ", resposta);

    //         if (resposta.ok) {
    //             window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
    //             window.location = "/dashboard/mural.html";
    //             limparFormulario();
    //             finalizarAguardar();
    //         } else if (resposta.status == 404) {
    //             window.alert("Deu 404!");
    //         } else {
    //             throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
    //         }
    //     }).catch(function (resposta) {
    //         console.log(`#ERRO: ${resposta}`);
    //         finalizarAguardar();
    //     });

    //     return false;

    // }

    // function editar(idAviso) {
    //     sessionStorage.ID_POSTAGEM_EDITANDO = idAviso;
    //     console.log("cliquei em editar - " + idAviso);
    //     window.alert("Você será redirecionado à página de edição do aviso de id número: " + idAviso);
    //     window.location = "/dashboard/edicao-aviso.html"

    // }

    // function deletar(idAviso) {
    //     console.log("Criar função de apagar post escolhido - ID" + idAviso);
    //     fetch(`/avisos/deletar/${idAviso}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(function (resposta) {

    //         if (resposta.ok) {
    //             window.alert("Post deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
    //             window.location = "/dashboard/mural.html"
    //         } else if (resposta.status == 404) {
    //             window.alert("Deu 404!");
    //         } else {
    //             throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
    //         }
    //     }).catch(function (resposta) {
    //         console.log(`#ERRO: ${resposta}`);
    //     });
    // }

    // function atualizarFeed() {
    //     fetch("/avisos/listar").then(function (resposta) {
    //         if (resposta.ok) {
    //             if (resposta.status == 204) {
    //                 var feed = document.getElementById("feed_container");
    //                 var mensagem = document.createElement("span");
    //                 mensagem.innerHTML = "Nenhum resultado encontrado."
    //                 feed.appendChild(mensagem);
    //                 throw "Nenhum resultado encontrado!!";
    //             }

    //             resposta.json().then(function (resposta) {
    //                 console.log("Dados recebidos: ", JSON.stringify(resposta));

    //                 var feed = document.getElementById("feed_container");
    //                 feed.innerHTML = "";
    //                 for (let i = 0; i < resposta.length; i++) {
    //                     var publicacao = resposta[i];

    //                     // criando e manipulando elementos do HTML via JavaScript
    //                     var divPublicacao = document.createElement("div");
    //                     var spanID = document.createElement("span");
    //                     var spanTitulo = document.createElement("span");
    //                     var spanNome = document.createElement("span");
    //                     var divDescricao = document.createElement("div");
    //                     var divButtons = document.createElement("div");
    //                     var btnEditar = document.createElement("button");
    //                     var btnDeletar = document.createElement("button");


    //                     spanID.innerHTML = "ID: <b>" + publicacao.idAviso + "</b>";
    //                     spanTitulo.innerHTML = "Título: <b>" + publicacao.titulo + "</b>";
    //                     spanNome.innerHTML = "Autor: <b>" + publicacao.nome + "</b>";
    //                     divDescricao.innerHTML = "Descrição: <b>" + publicacao.descricao + "</b>";
    //                     btnEditar.innerHTML = "Editar";
    //                     btnDeletar.innerHTML = "Deletar";

    //                     divPublicacao.className = "publicacao";
    //                     spanTitulo.id = "inputNumero" + publicacao.idAviso;
    //                     spanNome.className = "publicacao-nome";
    //                     spanTitulo.className = "publicacao-titulo";
    //                     divDescricao.className = "publicacao-descricao";

    //                     divButtons.className = "div-buttons"

    //                     btnEditar.className = "publicacao-btn-editar"
    //                     btnEditar.id = "btnEditar" + publicacao.idAviso;
    //                     btnEditar.setAttribute("onclick", `editar(${publicacao.idAviso})`);

    //                     btnDeletar.className = "publicacao-btn-editar"
    //                     btnDeletar.id = "btnDeletar" + publicacao.idAviso;
    //                     btnDeletar.setAttribute("onclick", `deletar(${publicacao.idAviso})`);

    //                     divPublicacao.appendChild(spanID);
    //                     divPublicacao.appendChild(spanNome);
    //                     divPublicacao.appendChild(spanTitulo);
    //                     divPublicacao.appendChild(divDescricao);
    //                     divPublicacao.appendChild(divButtons);
    //                     divButtons.appendChild(btnEditar);
    //                     divButtons.appendChild(btnDeletar);
    //                     feed.appendChild(divPublicacao);
    //                 }

    //                 finalizarAguardar();
    //             });
    //         } else {
    //             throw ('Houve um erro na API!');
    //         }
    //     }).catch(function (resposta) {
    //         console.error(resposta);
    //         finalizarAguardar();
    //     });
    // }