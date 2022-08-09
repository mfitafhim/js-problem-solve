// simple interest formula
function interest(mainBalance, interestRate, time) {
    let P = mainBalance;
    let r = interestRate;
    let t = time;
    let A = (P * t * r) / 100;
    return A;
}
let myValue = interest(10000, 5, 1);
console.log('My Final amount : ', myValue);
