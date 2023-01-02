import * as heroes from '../../heroes.js';

//Punto 1
const getHeroeByIdAsync = function(){
    const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!getHeroeById) {
                    resolve(console.log("Se encontró el ID"))
            }else{
                reject(new Error("No se encontró el ID"))
            }
        }, 2000);
        
    })
};

//Punto 2
fetch('https://api.github.com/users/manishmshiva')
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })


//Punto 3
const getName = async() => {
    try {
        const respuesta = await fetch ('https://api.github.com/users/manishmshiva');
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log(datos.name);
 
    }catch(error){
        console.log(error);
    }
}