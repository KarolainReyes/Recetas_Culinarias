import { body, param } from "express-validator";

export const crearRecetaDTO = [
    body("id")
        .isInt()
        .notEmpty()
        .withMessage("El id debe ser un numero entero positivo"),
        
    body("titulo")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El título es obligatorio y debe ser texto"),

    body("descripcion")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("La descripción es obligatoria"),

    body("dificultad")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("La dificultad es obligatoria y debe ser texto"),

    body("categoria")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("La categoría es obligatoria y debe ser texto"),

    body("ingredientes")
        .isArray({ min: 1 })
        .withMessage("Los ingredientes deben enviarse en un arreglo con al menos un elemento"),

    body("ingredientes.*")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("Cada ingrediente debe ser texto válido"),
];


export const actualizarRecetaDTO = [
    body("titulo")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El título debe ser texto válido"),

    body("descripcion")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("La descripción debe ser texto válido"),

    body("dificultad")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("La dificultad debe ser texto válido"),

    body("categoria")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("La categoría debe ser texto válido"),

    body("ingredientes")
        .optional()
        .isArray({ min: 1 })
        .withMessage("Los ingredientes deben enviarse en un arreglo válido"),

    body("ingredientes.*")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("Cada ingrediente debe ser texto válido"),
];
