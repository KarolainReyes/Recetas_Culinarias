import express from "express";
import {
  addIngredient,
  getIngredientsByRecipe,
  deleteIngredient,
  searchRecipesByIngredient
} from "../controllers/ingredientsController.js";

const router = express.Router();

// para agregar ingrediente a una receta
router.post("/recipes/:id/ingredients", addIngredient);

// pra ver todos los ingredientes de una receta
router.get("/recipes/:id/ingredients", getIngredientsByRecipe);

// para eliminar ingrediente de una receta
router.delete("/recipes/:id/ingredients/:ingredientId", deleteIngredient);

// para buscar recetas por ingrediente
router.get("/recipes/search", searchRecipesByIngredient);

export default router;
