// check leap year
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

const myYearIsLeapYear = isLeapYear(2002);
console.log('Is it leap year?', myYearIsLeapYear);