import express from "express";
const app = express();
import createDatabase from './bd.js';
createDatabase();
const port = 3000;
app.use(express.json());

// Importar rutas
import authRoutes from "./routes/auth.js";

// Usar rutas
app.use("/api/auth", authRoutes);
 
app.listen(port, ()=>{
    console.log("servidor escuchando pueto:", port)
})