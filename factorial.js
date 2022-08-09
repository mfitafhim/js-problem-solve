//Calculate Factorial of a number using for loop

// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         console.log(i);
//         result = result * i;
//     }
//     return result;
// }
// let myfac = factorial(4);
// console.log(myfac);

// function factorialize(num) {
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }

// console.log(factorialize(5));


function fact(n) {
    result = 1;
    for (let i = n; i >= 1; i--) {
        result *= i;
    }
    return (result);
}
console.log(fact(3));
