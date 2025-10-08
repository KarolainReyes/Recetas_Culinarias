import { obtenerBD } from "../config/db.js";

const COLECCION_USUARIOS = "usuarios"

export async function obtenerUsuarios(){
    return await obtenerBD().collection(COLECCION_USUARIOS).find().toArray();
}

export async function obtenerUsuarioPorId(id){
    return await obtenerBD().collection(COLECCION_USUARIOS).findOne(id);
}

export async function crearUsuario(datos){
    const {id,nombre,edad,documento} = datos;
    if(!id || !nombre || !edad || !documento){
        throw new Error("Faltan campos");
    }
    const usuario = { id,nombre,edad,documento}
    await obtenerBD().collection(COLECCION_USUARIOS).insertOne(usuario);
    return {message:"Usuario creado correctamente"};
}

export async function actualizarUsuario(id,datos) {
    const {nombre,edad,documento} = datos;
    const resultado = await obtenerBD().collection(COLECCION_USUARIOS).updateOne({id},{$set:datos});
    if(resultado.matchedCount===0){throw new Error("Usuario no encontrado");}
    return {message: "Usuario modificado"};
}

export async function eliminarUsuario(id){
    const resultado = obtenerBD().collection(COLECCION_USUARIOS).deteleOne({id});
    if(resultado.deletedCount===0){throw new Error("Usuario no encontrado");}
    return {message:"Usuario eliminado"}
}

