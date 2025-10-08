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
