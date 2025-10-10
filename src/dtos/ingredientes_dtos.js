import { body, param } from "express-validator";

export const crearIngredienteDTO = [
    body("id")
        .isInt()
        .notEmpty()
        .withMessage("El id debe ser un numero entero positivo"),

    body("nombre")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio y debe ser texto"),

    body("tipo")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El tipo es obligatorio y debe ser texto"),

];


export const actualizarIngredienteDTO = [
    body("nombre")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El nombre debe ser texto válido"),

    body("tipo")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El tipo debe ser texto válido"),

];