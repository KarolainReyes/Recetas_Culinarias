import { obtenerRecetas,
    obtenerRecetaPorId,
    crearReceta,
    actualizarReceta,
    eliminarReceta
} from "../services/recetas.services";
import { validationResult } from "express-validator";

export async function obtenerTodasLasRecetas(req, res) {
    try {
        const recetas = await obtenerRecetas();
        res.status(200).json(recetas)
    } catch (error) {
        res.status(500).json({error: "Error al obtener todas las recetas"})
    }
}

export async function obtenerUnaReceta(req, res) {
    try {
        const id = parseInt(req.paramas.id);
        const receta = await obtenerRecetaPorId(id);
        if(!receta) return res.status(404).json({error: "Receta no encontrada"})
    } catch (error) {
        res.status(500).json({error: "Error al obtener la receta"})
    }
}

export async function crearUnaReceta(req, res) {
    try {
        const result = await crearReceta(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function actualizarUnaReceta(req, res) {
    try {
        const id = parseInt(req.paramas.id);
        const result = await actualizarReceta(id, req.body);
        res.status(202).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export async function eliminarUnaReceta(req, res) {
    try {
        const id = parseInt(req.paramas.id);
        const result = await eliminarReceta(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}