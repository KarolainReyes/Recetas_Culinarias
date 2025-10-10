import { conectarDB, obtenerDB } from "./config/db.js";

async function seed() {
    await conectarDB();

    const jugadores = [
        {id: 1, nombre: "Carlos Mario", peso: 76, altura: 182, posicion: 1},
        {id: 2, nombre: "Daniel Vinasco", peso: 70, altura: 175, posicion: 10},
        {id: 3, nombre: "Sergio", peso: 80, altura: 170, posicion: 9},
        {id: 4, nombre: "Fabian", peso: 60, altura: 160, posicion: 4},
        {id: 5, nombre: "Edgar", peso: 80, altura: 170, posicion: 6}
    ];
    
    await obtenerDB().collection("jugadores").deleteMany();
    await obtenerDB().collection("jugadores").insertMany(jugadores);

    console.log("BD poblada");
    process.exit();
}

seed();