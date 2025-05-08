import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;
var nombreEquipo = "";

app.use(bodyParser.urlencoded({extended:true}));

function registrador(req, res, next) { // Crea tu propio middleware
    console.log(req.body); // Muestra los datos enviados por el usuario 
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Concatena los datos enviados por el usuario
    next(); // Llama a la siguiente funcion en la pila de middleware
}

app.use(registrador);// Usa el middleware

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res)=>{
    res.send(`<h1>El nombre de tu equipo es:</h1><h2>${nombreEquipo} ✌️</h2>`);
})

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
