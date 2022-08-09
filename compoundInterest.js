// Compound Interest Formula

const compoundInterest = (p, t, r, n) => {
    const amount = p * (Math.pow((1 + (r / n)), (n * t)));
    const interest = amount - p;
    return interest;
};
const principal = 10000;
const time = 1;
const rate = .5;
const n = 1;
console.log(compoundInterest(principal, time, rate, n));