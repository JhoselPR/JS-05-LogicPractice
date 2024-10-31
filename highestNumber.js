/*
*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

console.log('Ingresa 10 números:');
alert('Ingresa 10 números:')
numbers = [];
for (i=0; i<10; i++){
    numbers[i] = parseInt(prompt(`Número ${i+1}:`));
}
console.log(numbers);
numbers.sort((a,b) => a-b);
console.log(`El número mayor es ${numbers[9]}`);