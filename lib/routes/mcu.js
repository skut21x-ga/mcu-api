const express = require("express");
var router = express.Router();
const mcuController = require("../controller/mcu-controller");

router.get("/", mcuController.index);
router.get("/name/:name", mcuController.showName);
router.get("/category/:category", mcuController.showCategory);
router.get("/species/:species", mcuController.showSpecies);
router.get("/affiliation/:affiliation", mcuController.showAffiliation);
router.post("/", mcuController.create);
router.put("/name/:name", mcuController.edit);
router.delete("/name/:name", mcuController.delete);

module.exports = router;
