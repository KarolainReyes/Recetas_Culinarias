import { obtenerDB } from "../config/db.js";

const COLECCION_RECETAS = "recetas"

export async function obtenerRecetas() {
    const db = await obtenerDB()
    return await db.collection(COLECCION_RECETAS).find().toArray();
}

export async function obtenerRecetaPorId(id) {
    const db = await obtenerDB()
    const result = await db.collection(COLECCION_RECETAS).findOne({id});
    return result;
}

export async function crearReceta(datos) {
    const {id, nombreCliente, titulo, descripcion, dificultad, categoria, ingredientes } = datos

    const receta = {
        id,
        nombreCliente,
        titulo,
        descripcion,
        dificultad,
        categoria,
        ingredientes
    }
    const db = await obtenerDB()
    await db.collection(COLECCION_RECETAS).insertOne(receta);
    return { message: "Receta creada!"}
}

export async function obtenerRecetasPorCliente(nombre){
    const db = await obtenerDB()
    const result = await db.collection(COLECCION_RECETAS).findOne({nombreCliente:nombre});
    return result;
}

export async function actualizarReceta (id, datos){
    
    const db = await obtenerDB()
    const resultado = await db.collection(COLECCION_RECETAS).updateOne({id},{$set: datos});
    if(resultado.matchedCount === 0) throw new Error("Receta no encontrada!!!");
    return {message: "Receta modificada!!"};
}

export async function eliminarReceta(id) {
    const db = await obtenerDB()
    const resultado = await db.collection(COLECCION_RECETAS).deleteOne({id});
    if (resultado.deletedCount === 0){
        throw new Error("Receta no encontrada");
    }
    return {message: "Receta eliminada!"}
}

export async function añadirIngredientes(id,ingrediente){
    const db=await obtenerDB()
    const resultado = await db.collection(COLECCION_RECETAS).updateOne({id},{$push:{ingredientes:ingrediente.nombre}})
    if (resultado.modifiedCount===0){throw new Error("Receta no encontrada");
    }
    return {message:"Ingredientes añadidos"}
}

export async function eliminarIngredientes(id,ingrediente){
    const db=await obtenerDB()
    const resultado = await db.collection(COLECCION_RECETAS).updateOne({id},{$pull:{ingredientes:ingrediente}})
    if (resultado.modifiedCount===0){throw new Error("Receta no encontrada");
    }
    return {message:"Ingredientes eliminados"}
}





//- Permitir que un usuario pueda registrar una nueva receta con su título y descripción.
// - Listar todas las recetas disponibles en la plataforma.
// - Consultar una receta en específico con todos sus ingredientes.
// - Editar el título o descripción de una receta.
// - Eliminar una receta.
// - **Listar todas las recetas que pertenecen a un usuario específico** (ej. “ver todas las recetas de Juan Pérez”).