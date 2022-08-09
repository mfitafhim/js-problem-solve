// fahrenheit to celsius
function fahrToCels(fahr) {
    cels = (fahr - 32.0) * 5.0 / 9.0;
    return cels;
}
myFahr = fahrToCels(20);
console.log('Celsius value is: ', myFahr);
