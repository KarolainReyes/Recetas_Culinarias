import { obtenerDB } from "../config/db.js";

const COLECCION_USUARIOS = "usuarios"



export async function obtenerUsuarios(){
    const db = await obtenerDB()
    return await db.collection(COLECCION_USUARIOS).find().toArray();
    
}

export async function obtenerUsuarioPorId(id){
    const db = await obtenerDB()
    const result = await db.collection(COLECCION_USUARIOS).findOne({id});
    return result;
}

export async function crearUsuario(datos){
    const {id,nombre,edad,documento} = datos;

    const usuario = { id,nombre,edad,documento}
    const db = await obtenerDB()
    await db.collection(COLECCION_USUARIOS).insertOne(usuario);
    return {message:"Usuario creado correctamente"};
}

export async function actualizarUsuario(id,datos) {
    const {nombre,edad,documento} = datos;
    const db = await obtenerDB()
    const resultado = await db.collection(COLECCION_USUARIOS).updateOne({id},{$set:datos});
    if(resultado.matchedCount===0){throw new Error("Usuario no encontrado");}
    return {message: "Usuario modificado"};
}

export async function eliminarUsuario(id){
    const db = await obtenerDB()
    const resultado = await db.collection(COLECCION_USUARIOS).deleteOne({id});
    if(resultado.deletedCount===0){throw new Error("Usuario no encontrado");}
    return {message:"Usuario eliminado"}

}

