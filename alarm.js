/*
*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".
*/

const time = parseInt(prompt('Ingresa la cantidad de segundos antes de que suene la alarma:'));

setTimeout((time) => {
    alert(`Hora de ir a dormir después de ${time} segundos`);
}, time*1000, time);