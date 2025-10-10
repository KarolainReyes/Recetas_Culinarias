//imports
import express from "express";
import 'dotenv/config'
import { conectarDB } from "./config/db.js";
import routerUsuarios from "./routers/usuarios.router.js";
import routerRecetas from "./routers/recetas.routers.js";


//Config
const app = express();
app.use(express.json());

//Routers
app.use("/usuarios", routerUsuarios);
app.use("/recetas",routerRecetas);


app.get("/health", (req, res)=>{
    res.status(200).json({message: "Backend activo!!! ⚽️"});
})


// Excecution
conectarDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Backend escuchando en http://${process.env.HOST_NAME}:${process.env.PORT}`)
    })
})
