import { Router } from "express";
import { obtenerTodasLasRecetas,
    obtenerUnaReceta,
    crearUnaReceta,
    actualizarUnaReceta,
    eliminarUnaReceta
 } from "../controllers/recetas.controllers";
import { crearRecetaDTO, actualizarRecetaDTO } from "../dtos/recetas.dtos";
import { validationDTO } from "../middlewares/validationDTO";

 const router = Router();

 router.get("/", obtenerTodasLasRecetas);
 router.get("/:id", obtenerUnaReceta);
 router.post("/", crearRecetaDTO, validationDTO,crearUnaReceta);
 router.patch("/:id", actualizarRecetaDTO, validationDTO, actualizarUnaReceta,);
 router.delete("/:id", eliminarUnaReceta);

 export default router;
 