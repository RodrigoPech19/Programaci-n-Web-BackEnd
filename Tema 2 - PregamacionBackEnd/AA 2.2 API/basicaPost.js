import axios from 'axios';

const registrarUsuario = async ()=> {
    try{
        const response = await axios.post('https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        });
        console.log('Registro exitoso', response.data);
    } catch(error){
        console.error('Error en el registro: ', error.response.data);
    }
};

registrarUsuario();