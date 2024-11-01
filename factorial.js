/*
*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

const n = parseInt(prompt('Escribe un número mayor o igual a 1 para determinar su factorial'));

const factorial = (n) => {
    if (n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

if (n>=1){
    console.log(`${n}! = ${factorial(n)}`);
}else if (n==0){
    console.log(`${n}! = 1`);
}else{
    console.log('Número inválido');
}