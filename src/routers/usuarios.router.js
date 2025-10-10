import { Router } from "express";
import { 
    obtenerTodosLosusuarios,
    obtenerUsuario,
    crearUnUsuario,
    actualizarUnUsuario,
    eliminarUnUsuario
 } from "../controllers/usuarios.controller.js";
 import { crearUsuarioDTO,actualizarUsuarioDTO } from "../dtos/usuarios_dtos.js";
 import { validationDTO } from "../middlewares/validationDTO.js";

const router = Router();

router.get("/", obtenerTodosLosusuarios);
router.get("/:id", obtenerUsuario);
router.post("/", crearUsuarioDTO, validationDTO,crearUnUsuario);
router.patch("/:id", actualizarUsuarioDTO, validationDTO, actualizarUnUsuario);
router.delete("/:id", eliminarUnUsuario);

export default router;