/*
*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/

let username = prompt('Escribe tu nombre de usuario:');
let age = prompt('Ingresa tu edad:');
const movies = [];
n = parseInt(prompt('¿Cuántas películas favoritas tienes?'));
for (i=0; i<n; i++){
    movies[i] = prompt('Escribe el nombre de la película:')
}
console.log(`Nombre de usuario: ${username}\nEdad: ${age}`)

movies.forEach(e => {
    console.log(`La película ${e} es una de mis favoritas.`);
});