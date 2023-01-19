const Router = require("express").Router();
const controller = require("../controllers/recipeController");
const upload = require("../middleware/upload");
const validation = require("../middleware/validation-middleware");

Router.get("/recipe", controller.getRecipe);

Router.get("/recipe/pages", controller.getRecipePage);

Router.get("/recipe/get5data", controller.getNewestRecipe);

Router.get("/recipe/find", controller.findRecipe);

Router.post(
  "/recipe/add",
  upload.uploadSingle,
  validation.addRecipe,
  controller.addNewRecipe
);

Router.patch("/recipe/edit", controller.editRecipe);

Router.delete("/recipe/delete/:id", controller.deleteRecipe);

Router.get("/commentbyrecipe", controller.commentByRecipeID);

Router.get("/recipe/findByID", controller.findRecipeByID);

module.exports = Router;
