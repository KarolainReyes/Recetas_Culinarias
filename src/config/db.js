import { MongoClient } from "mongodb";
import 'dotenv/config';

const uri = process.env.MONGO_URI
const db_name = process.env.DB_NAME

const cliente = new MongoClient (uri);
let db;

export async function conectarBD() {
    try {
        await cliente.connect();
        console.log("DB conectada!");
        db = cliente.db(db_name);
    } catch (error) {
        console.error("Error al conectar con la DB", error)
    }
}

export async function obtenerBD() {
    if(!db){
        throw new Error("No se ha conectado con la DB!");
    }
    return db;
}