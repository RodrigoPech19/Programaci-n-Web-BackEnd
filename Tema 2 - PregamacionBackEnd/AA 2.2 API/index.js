fetch('https://jsonplaceholder.typicode.com/posts')
.then(respuesta => {

    if(!respuesta.ok){
        throw new Error('Respuesta del servidor fallida'+ respuesta.statusText);
    }
    return respuesta.json();
})

.then(datos=> {
    console.log('Datos Recibidos: ', datos);
})

.catch(error=> {
    console.error('Error al hacer solicitud: ', error);

});