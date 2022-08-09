// find grading point

function gradingPoint(mark) {
    if (mark < 0 || mark > 100) {
        console.log('Invalid Mark');
    } else if (mark >= 0 && mark < 33) {
        console.log('Fail marcho');
    }
    else if (mark >= 33 && mark < 50) {
        console.log('B');
    }
    else if (mark >= 50 && mark < 70) {
        console.log('A-');
    }
    else if (mark >= 70 && mark < 80) {
        console.log('A');
    }
    else if (mark >= 80 && mark <= 100) {
        console.log('A+');
    }
}
let myMark = gradingPoint(-10);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = num.map((num) => {
    return 8 * num;
})
console.log(result);

