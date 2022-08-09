//  Remove duplicate items from an array
let friends = [
    'mahtab', 'mahi',
    'masum', 'mehdi',
    'mahi', 'arif',
    'masrafee', 'mahtab'
]

function removeDuplicate(name) {
    let unique = [];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        // console.log(element);
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}

let fresh = removeDuplicate(friends);
console.log(fresh);