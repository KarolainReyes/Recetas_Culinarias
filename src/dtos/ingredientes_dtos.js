import { body, param } from "express-validator";

export const crearUsuarioDTO = [
    body("id")
        .isInt()
        .notEmpty()
        .withMessage("El id debe ser un numero entero positivo"),
        
    body("nombre")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio y debe ser texto"),

    body("edad")
        .isInt()
        .notEmpty()
        .withMessage("La edad debe ser un numero entero positivo"),

    body("documento")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El documento es obligatorio y debe ser texto"),

];


export const actualizarUsuarioDTO = [
    body("nombre")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El nombre debe ser texto válido"),

    body("edad")
        .optional()
        .isInt()
        .notEmpty()
        .withMessage("La edad debe ser un numero entero positivo"),

    body("documento")
        .optional()
        .isString()
        .trim()
        .notEmpty()
        .withMessage("El documento debe ser texto válido"),

];
