import { Router } from "express";
import { obtenerTodasLasRecetas,
    obtenerUnaReceta,
    crearUnaReceta,
    actualizarUnaReceta,
    eliminarUnaReceta
 } from "../controllers/recetas.controllers";

 const router = Router();

 router.get("/", obtenerTodasLasRecetas);
 router.get("/:id", obtenerUnaReceta,
 router.post("/",)
 )