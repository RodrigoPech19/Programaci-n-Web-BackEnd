import express from 'express';
import axios from 'axios';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.adviceslip.com/advice');
        const id = result.data.slip.id; 
        const advice = result.data.slip.advice;
        res.render('index.ejs', {
            id: id,
            advice: advice,
        });
        console.log(result.data);

        
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});