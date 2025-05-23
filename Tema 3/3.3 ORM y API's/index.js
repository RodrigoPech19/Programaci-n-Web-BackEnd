import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a MongoDB con el driver oficial
const uri = process.env.uri;
const client = new MongoClient(uri);
let db;

async function conectarDB() {
    try {
        await client.connect();
        db = client.db('test');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}
conectarDB();

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API con y sin ORM');
});

// GET: Todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

// GET: Usuario por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json(usuario);
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
});

// POST: Crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const ahora = new Date();
        const nuevoUsuario = {
            ...req.body,
            createdAt: ahora,
            updatedAt: ahora
        };
        const resultado = await db.collection('usuarios').insertOne(nuevoUsuario);
        res.status(201).json({ mensaje: 'Usuario creado', id: resultado.insertedId });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
});

// PUT: Actualizar usuario y updatedAt
app.put('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = {
            ...req.body,
            updatedAt: new Date()
        };

        const resultado = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(id) },
            { $set: datosActualizados }
        );

        if (resultado.matchedCount === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json({ mensaje: 'Usuario actualizado', resultado });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
});

// DELETE: Eliminar usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json({ mensaje: 'Usuario eliminado', resultado });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
