import { obtenerDB } from "../config/db";

const COLECCION_RECETAS = "recetas"

export async function obtenerRecetas() {
    return await obtenerDB().collection(COLECCION_RECETAS).find().toArray();
}

export async function registrarReceta() {
    
}