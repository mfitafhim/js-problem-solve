// isArray, includes, concat
var friends = ['mahtab', 'mahi', 'masum', 'mehdi'];
var newFriends = ['mahi', 'arif', 'masrafee'];
console.log(Array.isArray(friends));
var allFriends = friends.concat(newFriends);
console.log(allFriends);
console.log(friends.includes('mahi'));

var partial = allFriends.splice(1, 4, 'nat', 'boltu');
console.log(partial);
console.log(allFriends);