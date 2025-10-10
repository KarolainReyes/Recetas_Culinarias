import { obtenerDB } from "../config/db.js";

const COLECCION_INGREDIENTES = "ingredientes"



export async function obtenerIngredientes(){
    const db = await obtenerDB()
    return await db.collection(COLECCION_INGREDIENTES).find().toArray();

}

export async function obtenerIngredientesId(id){
    const db = await obtenerDB()
    const result = await db.collection(COLECCION_INGREDIENTES).findOne({id});
    return result;
}

export async function crearIngredientes(datos){
    const {id,nombre,tipo} = datos;

    const Ingrediente = { id,nombre,tipo}
    const db = await obtenerDB()
    await db.collection(COLECCION_INGREDIENTES).insertOne(Ingrediente);
    return {message:"Ingrediente creado correctamente"};
}

export async function actualizarIngredientes(id,datos) {
    const {nombre,tipo} = datos;
    const db = await obtenerDB()
    const resultado = await db.collection(COLECCION_INGREDIENTES).updateOne({id},{$set:datos});
    if(resultado.matchedCount===0){throw new Error("Ingrediente no encontrado");}
    return {message: "Ingrediente modificado"};
}

export async function eliminarIngredientes(id){
    const db = await obtenerDB()
    const resultado = await db.collection(COLECCION_INGREDIENTES).deleteOne({id});
    if(resultado.deletedCount===0){throw new Error("Ingrediente no encontrado");}
    return {message:"Ingrediente eliminado"}

}
