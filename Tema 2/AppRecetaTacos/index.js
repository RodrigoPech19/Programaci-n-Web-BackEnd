import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const recetaJSON = `[
    {
        "id": "0001",
        "tipo": "taco",
        "nombre": "Taco lechon",
        "precio": 20.00,
        "ingredientes": {
            "proteina": { "nombre": "Puerco", "preparacion": "Horneado" },
            "salsa": { "nombre": "Tomate verde", "picor": "Medio" },
            "acompañamientos": [
                { "nombre": "Cebolla", "cantidad": "1 cucharada", "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"] },
                { "nombre": "Guacamole", "cantidad": "2 cucharadas", "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"] }
            ]
        }
    },
    {
        "id": "0002",
        "tipo": "taco",
        "nombre": "Taco de camaron",
        "precio": 25.00,
        "ingredientes": {
            "proteina": { "nombre": "Camaron", "preparacion": "A la plancha" },
            "salsa": { "nombre": "Chipotle", "picor": "Alto" },
            "acompañamientos": [
                { "nombre": "Col morada", "cantidad": "1 cucharada", "ingredientes": ["Col morada", "Vinagre", "Sal", "Azúcar"] },
                { "nombre": "Mayonesa de ajo", "cantidad": "1 cucharada", "ingredientes": ["Mayonesa", "Ajo", "Jugo de limón", "Sal"] }
            ]
        }
    },
    {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco de res",
        "precio": 22.00,
        "ingredientes": {
            "proteina": { "nombre": "Res", "preparacion": "Asada" },
            "salsa": { "nombre": "Roja", "picor": "Medio" },
            "acompañamientos": [
                { "nombre": "Cebolla asada", "cantidad": "2 rodajas", "ingredientes": ["Cebolla blanca", "Aceite", "Sal"] },
                { "nombre": "Pico de gallo", "cantidad": "2 cucharadas", "ingredientes": ["Tomate", "Cebolla", "Cilantro", "Jugo de limón", "Sal"] }
            ]
        }
    },
    {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de pollo",
        "precio": 18.00,
        "ingredientes": {
            "proteina": { "nombre": "Pollo", "preparacion": "Deshebrado y guisado" },
            "salsa": { "nombre": "Verde", "picor": "Bajo" },
            "acompañamientos": [
                { "nombre": "Rábanos", "cantidad": "3 rodajas", "ingredientes": ["Rábano", "Sal", "Jugo de limón"] },
                { "nombre": "Crema agria", "cantidad": "1 cucharada", "ingredientes": ["Crema", "Sal", "Jugo de limón"] }
            ]
        }
    }
]

`;

const recetaTacos = JSON.parse(recetaJSON);

app.use(express.static("public"));

app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetaTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
