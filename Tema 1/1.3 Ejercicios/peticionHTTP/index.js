import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<p> respuesta GET </p>");
});
app.post('/registro', (req, res) => {
    res.sendStatus(201);
});

app.put('/usuario/actualizar', (req, res) => {
    res.sendStatus(200);
});

app.patch('/usuario/modificar', (req, res) => {
    res.sendStatus(200);
});

app.delete('/usuario/eliminar', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});