import { Router } from "express";
import { obtenerTodasLasRecetas,
    obtenerUnaReceta,
    crearUnaReceta,
    actualizarUnaReceta,
    eliminarUnaReceta
 } from "../controllers/recetas.controllers.js";
import { crearRecetaDTO, actualizarRecetaDTO } from "../dtos/recetas_dtos.js";
import { validationDTO } from "../middlewares/validationDTO.js";

 const router = Router();

 router.get("/", obtenerTodasLasRecetas);
 router.get("/:id", obtenerUnaReceta);
 router.post("/", crearRecetaDTO, validationDTO,crearUnaReceta);
 router.patch("/:id", actualizarRecetaDTO, validationDTO, actualizarUnaReceta,);
 router.delete("/:id", eliminarUnaReceta);

 export default router;
 