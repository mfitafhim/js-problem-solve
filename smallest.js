// Find the min number in an array

// function getMin(arr) {
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         // console.log(element);
//         if (element < smallest) {
//             smallest = element
//         }
//     }
//     return smallest;
// }
// var arr = [3, 45, 6, 78, 43, 5, 6, 78, 0, -56, -20, 345];
// let myFunc = getMin(arr);
// console.log('Smallest number is:', myFunc);

function getSmall(numbers) {
    const small = Math.min(...numbers);
    return small;
}
let numbers = [23, 45, 67, 9, 70, 34];
console.log(getSmall(numbers));
