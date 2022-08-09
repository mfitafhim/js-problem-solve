const myWord = 'I am Tafhim';
function reversed(word) {
    let words = word.split(' ');
    let result = [];
    // console.log(words);
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    console.log(reversed);
}
reversed(myWord);
