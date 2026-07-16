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


router.post("/questionarioRegistro", function(req, res){
    questionarioController.questionarioRegistro(req, res)
})

router.post("/dashboardTrocar", function(req, res){
    questionarioController.dashboardTrocar(req, res)
})

module.exports = router;