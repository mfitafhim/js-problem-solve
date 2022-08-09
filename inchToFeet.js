// convert inches to feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const myInch = 80;
const myFeet = inchToFeet(myInch);
console.log('My Feet: ', myFeet.toFixed(2));