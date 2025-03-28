import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const temasJSON = `[
    {
        "Temas": [
          {
            "ID": 1,
            "Nombre": "Programación Web",
            "Descripción": "Desarrollo de aplicaciones y sitios web utilizando tecnologías como HTML, CSS y JavaScript.",
            "Palabras claves": ["HTML", "CSS", "JavaScript", "Frameworks", "Backend", "Frontend"],
            "Prácticas": [
              {
                "Título": "Creación de una Página Web Responsiva",
                "Descripción": "Desarrollar un sitio web utilizando HTML, CSS y JavaScript con diseño adaptable.",
                "Objetivo": "Aplicar principios de diseño responsivo para mejorar la experiencia de usuario en diferentes dispositivos."
              }
            ]
          },
          {
            "ID": 2,
            "Nombre": "Administración de Redes",
            "Descripción": "Gestión, configuración y mantenimiento de redes de comunicación de datos.",
            "Palabras claves": ["TCP/IP", "Router", "Switch", "Seguridad", "Wi-Fi", "LAN", "WAN"],
            "Prácticas": [
              {
                "Título": "Configuración de una Red Local",
                "Descripción": "Implementar y configurar una red local utilizando routers y switches.",
                "Objetivo": "Comprender los conceptos básicos de configuración de redes y seguridad en entornos empresariales."
              }
            ]
          },
          {
            "ID": 3,
            "Nombre": "Inteligencia Artificial",
            "Descripción": "Desarrollo de algoritmos y modelos que permiten a las máquinas aprender y tomar decisiones.",
            "Palabras claves": ["Machine Learning", "Redes Neuronales", "Deep Learning", "Big Data", "Python"],
            "Prácticas": [
              {
                "Título": "Clasificación de Imágenes con Machine Learning",
                "Descripción": "Entrenar un modelo de aprendizaje automático para clasificar imágenes.",
                "Objetivo": "Introducir al uso de modelos de aprendizaje supervisado y redes neuronales en la clasificación de datos."
              }
            ]
          },
          {
            "ID": 4,
            "Nombre": "Programación Para Dispositivos Móviles",
            "Descripción": "Desarrollo de aplicaciones móviles para plataformas como Android e iOS.",
            "Palabras claves": ["Android", "iOS", "Flutter", "React Native", "Swift", "Kotlin"],
            "Prácticas": [
              {
                "Título": "Creación de una Aplicación Móvil Básica",
                "Descripción": "Desarrollar una aplicación sencilla con interfaz gráfica y funcionalidad básica.",
                "Objetivo": "Comprender los fundamentos del desarrollo de aplicaciones móviles utilizando frameworks modernos."
              }
            ]
          }
        ]
      }
      
]`;

const temas = JSON.parse(temasJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/tema/:type', (req, res) => {
    const temaBuscado = temas[0].Temas.find(t => t.Nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(temaBuscado || { error: "Tema no encontrado" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});