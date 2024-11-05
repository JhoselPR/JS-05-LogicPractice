/*
*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

const sentence = prompt('Ingresa una palabra o frase para verificar si palíndromo');

const isPalindrome = (input) => {
    const newInput = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡! ]/g,"").replace(/\s{2,}/g," ").replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u');
    // console.log(newInput);
    const reversedInput = newInput.split('').reverse().join('');
    if (reversedInput==newInput){
        console.log('Es palíndromo');
    }else{
        console.log('No es palíndromo');
    }
}
isPalindrome(sentence);


