const Router = require("express").Router();
const controller = require("../controllers/saveControllers");

Router.get("/save", controller.getSaveRecipe);
Router.post("/save/add", controller.addSaveRecipe);
Router.delete("/save/delete", controller.deleteSaveRecipe);
Router.get("/saveByUser", controller.getSavebyUser);
Router.get("/save/findByUser", controller.findSaveByUser);

module.exports = Router;
