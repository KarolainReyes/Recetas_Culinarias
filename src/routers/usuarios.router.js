import { Router } from "express";
import { 
    obtenerTodosLosusuarios,
    obtenerUsuario,
    crearUnUsuario,
    actualizarUnUsuario,
    eliminarUnUsuario
 } from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", obtenerTodosLosusuarios);
router.get("/:id", obtenerUsuario);
router.post("/", crearUnUsuario);
router.patch("/:id", actualizarUnUsuario);
router.delete("/:id", eliminarUnUsuario);

export default router;