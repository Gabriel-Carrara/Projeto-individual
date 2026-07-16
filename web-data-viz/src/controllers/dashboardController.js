var dashboardModel = require("../models/dashboardModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}




function graficosBarra(req, res){

  dashboardModel.graficosBarra().then(function (resultado) {
      if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
}


function pegarHistorico(req, res){
  let id = req.params.id

  dashboardModel.pegarHistorico(id).then(function (resultado){
    if(resultado.length>0){
        res.status(200).json(resultado)
    } else {
        res.status(204).send("Nenhum resultado encontrado!")

    }
  }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
}

function alterarPersonagem(req, res){
let indice = req.body.indice
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
  graficosBarra,
  pegarHistorico
};
