// find a long length element from a array

var friends = ['Tafhim', 'Mahi', 'Mahtab', 'Arif', 'Siddikullah'];
var longLength = friends[0];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element.length > longLength.length) {
        longLength = element;
    }
}
console.log(longLength);