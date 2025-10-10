import { obtenerIngredientes,
    crearIngrediente,
    actualizarIngrediente,
    eliminarIngrediente
} from "../services/ingredients.services.js";


export async function obtenerIngredientesPorReceta(req, res) {
    try {
        const Ingrediente = await obtenerIngredientes();
        res.status(200).json(Ingrediente)
    } catch (error) {
        res.status(500).json({error: "Error al obtener todas los Ingredientes"})
    }
}


export async function crearUnIngrediente(req, res) {
    try {
        const result = await crearIngrediente(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function actualizarUnIngrediente(req, res) {
    try {
        const id = parseInt(req.params.id);
        const result = await actualizarIngrediente(id, req.body);
        res.status(202).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export async function eliminarUnIngrediente(req, res) {
    try {
        const id = parseInt(req.params.id);
        const result = await eliminarIngrediente(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}