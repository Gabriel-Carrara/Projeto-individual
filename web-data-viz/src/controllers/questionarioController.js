var questionarioModel = require("../models/questionarioModel");

// function buscarUltimasMedidas(req, res) {

//     const limite_linhas = 7;

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

//     medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

function questionarioSalvar(req, res){
    var indice = req.body.indice
    var id = req.body.id_usuario

    if(indice>20||indice<1){
        res.status(400).send("esse indice não deveria existir")
    } else{

        questionarioModel.salvarPersonagem(indice)
        questionarioModel.salvarUsuario(id,indice)
    }
}


function questionarioLike(req, res){
    var like = req.body.like
    var id = req.body.id_personagem

    if(like>0 && like <6){
        questionarioModel.questionarioLike(like, id)
    } else {
                res.status(400).send("deu erro")

    }
}


module.exports = {
questionarioSalvar,
questionarioLike
}