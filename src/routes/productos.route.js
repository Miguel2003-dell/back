const express = require('express');
//Se crean las rutas
const router = express.Router();
//Se obtienen los controladores
const condoCtrl = require("../controllers/condo.controllers");

router.post("/", condoCtrl.saveCondon);

router.get("/", condoCtrl.findAllCondon);

router.delete("/:id", condoCtrl.deleteCondon);

router.put("/:id", condoCtrl.updateCondon);

module.exports = router;