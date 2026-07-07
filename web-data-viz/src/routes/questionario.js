var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

router.post("/questionarioSalvar", function(req, res){
    questionarioController.questionarioSalvar(req, res)
})

router.post("/questionarioLike", function(req, res){
    questionarioController.questionarioLike(req, res)
})

module.exports = router;