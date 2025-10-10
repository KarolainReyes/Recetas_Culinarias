import { ObjectId } from "mongodb";
import { obtenerBD } from "../config/db.js";

const COLECCION_RECETAS = "recetas";

async function obtenerColeccion() {
    const db = await obtenerBD();
    return db.collection(COLECCION_RECETAS);
}

export async function agregarIngredienteAReceta(recetaId, ingrediente) {
    const coleccion = await obtenerColeccion();
    return await coleccion.updateOne(
        { _id: new ObjectId(recetaId) },
        { $push: { ingredientes: ingrediente } }
    );
}

export async function eliminarIngredienteDeReceta(recetaId, ingredienteId) {
    const coleccion = await obtenerColeccion();
    return await coleccion.updateOne(
        { _id: new ObjectId(recetaId) },
        { $pull: { ingredientes: { _id: new ObjectId(ingredienteId) } } }
    );
}

export async function buscarRecetasPorIngrediente(nombreIngrediente) {
    const coleccion = await obtenerColeccion();
    return await coleccion.find(
        { "ingredientes.nombre": { $regex: nombreIngrediente, $options: "i" } },
        { projection: { titulo: 1, descripcion: 1 } }
    ).toArray();
}
