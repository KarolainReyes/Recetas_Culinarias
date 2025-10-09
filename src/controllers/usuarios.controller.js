import { obtenerUsuarios, 
    obtenerUsuarioPorId, 
    crearUsuario, 
    actualizarUsuario, 
    eliminarUsuario } 
    from "../services/usuarios.services.js";

export async function obtenerTodosLosusuarios(req, res) {
    try {
        const usuarios = await obtenerUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({error: "Error al obtener todos los usuarios"});
    }
}

export async function obtenerUsuario(req, res) {
    try {
        const id = parseInt(req.params.id);
        const usuario = await obtenerUsuarioPorId(id);
        if(!usuario) return res.status(404).json({error: "Usuario no encontrado!!"});
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({error: "Error al obtener un usuario"});
    }
}

export async function crearUnUsuario(req, res) {
    try {
        const result = await crearUsuario(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function actualizarUnUsuario(req, res) {
    try {
        const id = parseInt(req.params.id);
        const result = await actualizarUsuario(id, req.body);
        res.status(202).json(result);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export async function eliminarUnUsuario(req, res) {
    try {
        const id = parseInt(req.params.id);
        const result = await eliminarUsuario(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}