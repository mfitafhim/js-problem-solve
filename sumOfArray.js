// calculate sum of array

// function sumOfArray(numbers) {
//     sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum += element;
//         // console.log(i, element, sum);
//     }
//     return sum;
// }
// const myNumbers = [12, 45, 67, 100];
// console.log('Total ', sumOfArray(myNumbers));
// // console.log(sum);

// Get Odd Numbers of an array and get odd Sum of an array
function sumOfOdd(oddNumbers) {
    console.log(oddNumbers);
    sumOdd = 0;
    oddNumber = [];
    for (let i = 0; i < oddNumbers.length; i++) {
        const element = oddNumbers[i];
        // console.log(element);
        if (element % 2 === 1) {
            oddNumber.push(element);
            sumOdd += element;
        }
    }
    return sumOdd;
}
const myOddNumbers = [12, 45, 34, 67, 80];
let sumMyOdd = sumOfOdd(myOddNumbers);
console.log(sumMyOdd);