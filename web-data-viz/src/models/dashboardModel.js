var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}');`

  return database.executar(instrucaoSql);
}


function graficosBarra(){
  var instrucaoSql = `SELECT * FROM personagem`;

  return database.executar(instrucaoSql);
}


function pegarHistorico(id){
  var instrucaoSql = `SELECT fk_usuario, fk_personagem, data_registro FROM historico WHERE fk_usuario = ${id} ORDER BY data_registro DESC;`

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar, graficosBarra, pegarHistorico };
