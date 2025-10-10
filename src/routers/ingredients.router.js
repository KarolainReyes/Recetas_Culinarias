import { Router } from "express";
import {
    addIngredient,
    getIngredientsByRecipe,
    deleteIngredient,
    searchRecipesByIngredient
} from "../controllers/ingredientsController.js";

const router = Router();
router.post("/:id/ingredients", addIngredient);
router.get("/:id/ingredients", getIngredientsByRecipe);
router.delete("/:id/ingredients/:ingredientId", deleteIngredient);
router.get("/search", searchRecipesByIngredient);

export default router;