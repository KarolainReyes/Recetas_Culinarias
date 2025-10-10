import { Router } from "express";
import { 
    obtenerIngredientes,
    crearIngrediente,
    actualizarIngrediente,
    eliminarIngrediente
 } from "../controllers/ingredientsController.js";
 import { crearIngredienteDTO,actualizarIngredienteDTO } from "../dtos/ingredientes_dtos.js";
 import { validationDTO } from "../middlewares/validationDTO.js";

const router = Router();

router.get("/", obtenerIngredientes);
router.post("/", crearIngredienteDTO, validationDTO, crearIngrediente);
router.patch("/:id", actualizarIngredienteDTO, validationDTO, actualizarIngrediente);
router.delete("/:id", eliminarIngrediente);

export default router;