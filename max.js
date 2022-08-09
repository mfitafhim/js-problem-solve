const tafhim = 95;
const mahi = 67;
const mahtab = 90;

function getMax(a, b, c) {
    if (a > b && a > c) {
        console.log('Tafhim will get the cake');
    } else if (b > a && b > c) {
        console.log('mahi will get the cake');
    } else {
        console.log('Mahtab will get the cake');
    }
}

getMax(tafhim, mahi, mahtab);

function getMin(a, b, c) {
    let minValue = Math.min(a, b, c);
    return minValue;
}
console.log('Mimimum value is :', getMin(12, 4, 56));