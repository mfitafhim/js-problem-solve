// check even or odd number

function isEven(number) {
    const reminder = number % 2
    if (reminder === 0) {
        return true;
    } else {
        return false;
    }
}
const myNumberIsEven = isEven(10);
console.log(myNumberIsEven);
