import { ObjectId } from "mongodb";
import * as ingredientService from "../services/ingredients.services.js";
import * as recipeService from "../services/recetas.services.js";


// Función auxiliar para validar ID y obtener la receta
async function validateAndGetRecipe(recipeId) {
    if (!ObjectId.isValid(recipeId)) {
        return { error: { status: 400, message: "El ID de la receta no es válido." } };
    }
    const recipe = await recipeService.obtenerRecetaPorId(recipeId);
    if (!recipe) {
        return { error: { status: 404, message: "Receta no encontrada." } };
    }
    return { recipe };
}


//Agregar ingrediente a una receta
export const addIngredient = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ error: "El nombre del ingrediente es obligatorio." });
        }
        const { recipe, error: recipeError } = await validateAndGetRecipe(recipeId);
        if (recipeError) {
            return res.status(recipeError.status).json({ error: recipeError.message });
        }

        const newIngredient = {
            _id: new ObjectId(),
            nombre,
        };
        await ingredientService.agregarIngredienteAReceta(recipeId, newIngredient);
        res.status(201).json({ message: "Ingrediente agregado con éxito", ingredient: newIngredient });
    } catch (error) {
        res.status(500).json({ error: "Error al agregar ingrediente", details: error.message });
    }
};


//Ver todos los ingredientes de una receta
export const getIngredientsByRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { recipe, error } = await validateAndGetRecipe(recipeId);
        if (error) {
            return res.status(error.status).json({ error: error.message });
        }
        res.json({
            receta: recipe.titulo,
            ingredientes: recipe.ingredientes || []
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener ingredientes", details: error.message });
    }
};


//  Eliminar ingrediente de una receta
export const deleteIngredient = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const ingredientId = req.params.ingredientId;

        if (!ObjectId.isValid(req.params.ingredientId)) {
            return res.status(400).json({ error: "El ID del ingrediente no es válido." });
        }

        const { recipe, error: recipeError } = await validateAndGetRecipe(recipeId);
        if (recipeError) {
            return res.status(recipeError.status).json({ error: recipeError.message });
        }

        // Verificar si el ingrediente existe en la receta antes de intentar eliminar
        const ingredientExists = recipe.ingredientes?.some(ing => ing._id.equals(ingredientId));
        if (!ingredientExists) {
            return res.status(404).json({ error: "Ingrediente no encontrado en esta receta." });
        }

        const result = await ingredientService.eliminarIngredienteDeReceta(recipeId, ingredientId);
        if (result.modifiedCount === 0) {
            return res.status(500).json({ error: "No se pudo eliminar el ingrediente." });
        }
        res.json({ message: "Ingrediente eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar ingrediente", details: error.message });
    }
};


//Buscar recetas que contengan un ingrediente específico
export const searchRecipesByIngredient = async (req, res) => {
    try {
        const { ingredient } = req.query;
        if (!ingredient) {
            return res.status(400).json({ error: "Debe proporcionar un nombre de ingrediente para la búsqueda." });
        }
        const recipes = await ingredientService.buscarRecetasPorIngrediente(ingredient);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar recetas", details: error.message });
    }
};
