import { Router } from "express";
import { obtenerTodasLasRecetas,
    obtenerUnaReceta,
    crearUnaReceta,
    actualizarUnaReceta,
    eliminarUnaReceta,
    obtenerUnaRecetaPorCliente,
    añadirIngrediente,eliminarIngrediente
 } from "../controllers/recetas.controllers.js";
import { crearRecetaDTO, actualizarRecetaDTO } from "../dtos/recetas_dtos.js";
import { validationDTO } from "../middlewares/validationDTO.js";
import { obtenerRecetasPorCliente } from "../services/recetas.services.js";

 const router = Router();

 router.get("/", obtenerTodasLasRecetas);
 router.get("/:id", obtenerUnaReceta);
 router.put("/ingredientesAñadir/:id",añadirIngrediente);
  router.put("/ingredientesEliminar/:id",eliminarIngrediente)
 router.get("/cliente/:nombre",obtenerUnaRecetaPorCliente)
 router.post("/", crearRecetaDTO, validationDTO,crearUnaReceta);
 router.patch("/:id", actualizarRecetaDTO, validationDTO, actualizarUnaReceta,);
 router.delete("/:id", eliminarUnaReceta);

 export default router;
 