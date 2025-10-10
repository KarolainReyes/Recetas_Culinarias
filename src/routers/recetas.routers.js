import { Router } from "express";
import { obtenerTodasLasRecetas,
    obtenerUnaReceta,
    crearUnaReceta,
    actualizarUnaReceta,
    eliminarUnaReceta
 } from "../controllers/recetas.controllers";
import { eliminarReceta } from "../services/recetas.services";

 const router = Router();

 router.get("/", obtenerTodasLasRecetas);
 router.get("/:id", obtenerUnaReceta);
 router.post("/", crearUnaReceta);
 router.patch("/:id", actualizarUnaReceta);
 router.delete("/:id", eliminarUnaReceta);

 export default router;
 