var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//                         temperatura,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//                         temperatura,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


function salvarPersonagem(indice){
    console.log('cheguei no salvarPersonagem do model')

    var instrucaoSql = `UPDATE personagem SET contador = contador + 1 WHERE id = ${indice};`

console.log(instrucaoSql)
return database.executar(instrucaoSql)
}

function salvarUsuario(id, indice){
    console.log('cheguei no salvarUsuario do model')

    var instrucaoSql = `UPDATE usuario SET fk_personagem = ${indice} WHERE id = ${id};`

console.log(instrucaoSql)
return database.executar(instrucaoSql)
}

function questionarioLike(like, id){
    console.log('cheguei no questionarioLike do model')

    var instrucaoSql = `UPDATE personagem SET curtidas = curtidas + ${like} WHERE id = ${id};`

        console.log(instrucaoSql)
    return database.executar(instrucaoSql)
    
}


function verificarRegistro(indice, id){

       console.log('cheguei no verificarRegistro do model')

    var instrucaoSql = `SELECT * FROM historico WHERE fk_usuario = ${id} AND fk_personagem = ${indice} `

        console.log(instrucaoSql)
    return database.executar(instrucaoSql)
    


}


function criarRegistro(indice, id){

       console.log('cheguei no criarRegistro do model')

    var instrucaoSql = `INSERT INTO historico (fk_usuario, fk_personagem, data_registro) values 
    (${id},${indice},now())`

        console.log(instrucaoSql)
    return database.executar(instrucaoSql)
    

}


function atualizarRegistro(indice, id){

       console.log('cheguei no atualizarRegistro do model')

    var instrucaoSql = `UPDATE historico SET data_registro = now() WHERE fk_usuario = ${id} and fk_personagem = ${indice};`

        console.log(instrucaoSql)
    return database.executar(instrucaoSql)
    
}


module.exports = {
    salvarPersonagem,
    salvarUsuario,
    questionarioLike,
    verificarRegistro,
    criarRegistro,
    atualizarRegistro
}
