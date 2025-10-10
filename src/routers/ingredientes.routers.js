import { Router } from "express";
import { 
    obtenerIngredientesPorReceta,
    obtenerIngredientesPorRecetaId,
    crearUnIngrediente,
    actualizarUnIngrediente,
    eliminarUnIngrediente
 } from "../controllers/ingredientsController.js";
 import { crearIngredienteDTO,actualizarIngredienteDTO } from "../dtos/ingredientes_dtos.js";
 import { validationDTO } from "../middlewares/validationDTO.js";

const router = Router();

router.get("/", obtenerIngredientesPorReceta);
router.get("/:id", obtenerIngredientesPorRecetaId);
router.post("/", crearIngredienteDTO, validationDTO, crearUnIngrediente);
router.patch("/:id", actualizarIngredienteDTO, validationDTO, actualizarUnIngrediente);
router.delete("/:id", eliminarUnIngrediente);

export default router;