//imports
import express from "express";
import 'dotenv/config'
import { conectarBD } from "./config/db.js";
import routerJugadores from "./routers/jugadores.routes.js";


//Config
const app = express();
app.use(express.json());

//Routers
app.use("/jugadores", routerJugadores);


app.get("/health", (req, res)=>{
    res.status(200).json({message: "Backend activo!!! ⚽️"});
})


// Excecution
conectarBD().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Backend escuchando en http://${process.env.HOST_NAME}:${process.env.PORT}`)
    })
})