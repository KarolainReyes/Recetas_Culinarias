import { obtenerDB } from "../config/db.js";

const COLECCION_RECETAS = "recetas"

export async function obtenerRecetas() {
    return await obtenerDB().collection(COLECCION_RECETAS).find().toArray();
}

export async function obtenerRecetaPorId(id) {
    return await obtenerDB().collection(COLECCION_RECETAS).findOne({id});
}

export async function crearReceta(datos) {
    const {id, titulo, descripcion, difultad, categoria, ingredientes } = datos

    const receta = {
        id,
        titulo,
        descripcion,
        difultad,
        categoria,
        ingredientes
    }

    await obtenerDB().collection(COLECCION_RECETAS).insertOne(receta);
    return { message: "Receta creada!"}
}


export async function actualizarReceta (id, datos){
    //crear validador de campos
}

export async function eliminarReceta(id) {
    const resultado = await obtenerDB().collection(COLECCION_RECETAS).deleteOne({id});
    if (resultado.deleteCount === 0){
        throw new Error("Jugador no encontrado");
    }
    return {message: "Jugador eliminado!"}
}










//- Permitir que un usuario pueda registrar una nueva receta con su título y descripción.
// - Listar todas las recetas disponibles en la plataforma.
// - Consultar una receta en específico con todos sus ingredientes.
// - Editar el título o descripción de una receta.
// - Eliminar una receta.
// - **Listar todas las recetas que pertenecen a un usuario específico** (ej. “ver todas las recetas de Juan Pérez”).