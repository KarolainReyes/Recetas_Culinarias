<<<<<<< HEAD
//imports
import express from "express";
import 'dotenv/config'
import { conectarBD } from "./config/db.js";
import routerUsuarios from "./routers/usuarios.router.js";


//Config
const app = express();
app.use(express.json());

//Routers
app.use("/usuarios", routerUsuarios);


app.get("/health", (req, res)=>{
    res.status(200).json({message: "Backend activo!!! ⚽️"});
})


// Excecution
conectarBD().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Backend escuchando en http://${process.env.HOST_NAME}:${process.env.PORT}`)
    })
})
=======
import express from "express";
import 'dotenv/config'
import { conectarDB } from "./config/db.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res)=>{
    res.status(200).json({message: "Backend activo"})
})

conectarDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Backend escuchando en http://${process.env.HOST_NAME}: ${process.env.PORT}`)
    })
})
>>>>>>> origin/feature/recipes
