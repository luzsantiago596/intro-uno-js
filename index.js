//Punto 1

const celular = {
    marca: 'Samsung',
    color: 'azul',
    precio: 19000,
    anio_creacion: 2020
};

//Mostrar (en un console log) el valor de la key precio de dicho objeto.
console.log(celular.precio);

//Insertar la key stock con el valor true.
celular.stock = true;

//Modificar el valor de la llave anio_creacion 2017.
celular.anio_creacion = 2017;

//Eliminar la key marca.
delete celular.marca;

//Imprimir todas las llaves del hash almacenado en la variable celular con su respectivo valor.
console.log(Object.values(celular));


//Punto 2
const arreglo = [1,2,3,4]

//a
let arreglo_dos = [...arreglo, 5]
console.log(arreglo_dos)

//b
const arreglo_tres = arreglo_dos.map(function(elementos){
    return elementos * 5;
})
console.log(arreglo_tres)

//Punto 3
const person = {
    name: 'Pepe',
    age: 26,
    hobbies: ['chess', 'running', 'basket']
}
const {name: nombre, age: edad, hobbies} = person;
console.log(nombre);
