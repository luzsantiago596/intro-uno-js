import * as heroes from '../../heroes.js';

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