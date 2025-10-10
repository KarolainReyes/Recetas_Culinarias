import { MongoClient } from "mongodb";
<<<<<<< HEAD
import 'dotenv/config'

const uri = process.env.MONGO_URI;
const db_name = process.env.DB_NAME;

const cliente = new MongoClient(uri);
let db;

export async function conectarBD(){
    try {
        await cliente.connect();
        console.log("DB conectada!!!");
        db = cliente.db(db_name);
    } catch (error) {
        console.error("Error al conectar la BD:", error)
    }
}

export function obtenerBD(){
    if(!db) throw new Error("No se ha conectado la BD!!");
=======
import 'dotenv/config';

const uri = process.env.MONGO_URI
const db_name = process.env.DB_NAME

const cliente = new MongoClient (uri);
let db;

export async function conectarDB() {
    try {
        await cliente.connect();
        console.log("DB conectada!");
        db = cliente.db(db_name);
    } catch (error) {
        console.error("Error al conectar con la DB", error)
    }
}

export async function obtenerDB() {
    if(!db){
        throw new Error("No se ha conectado con la DB!");
    }
>>>>>>> origin/feature/recipes
    return db;
}