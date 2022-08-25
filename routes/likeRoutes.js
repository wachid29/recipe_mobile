const Router = require("express").Router();
const controller = require("../controllers/likeControllers");

Router.get("/like", controller.getLikeRecipe);
Router.post("/like/add", controller.addLikeRecipe);
Router.delete("/like/delete", controller.deleteLikeRecipe);
Router.get("/likeByUser", controller.getLikebyUser);

module.exports = Router;
