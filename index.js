const  { aMysteryFunction, anotherMysteryFunction } = require('./mystery');

const myNumbers = [3, 10, 15, 32, 22];
const myNumber = 6;
aMysteryFunction(myNumber);

const myStrings = ["Hello ", "There"];
aMysteryFunction(myStrings);

const someNumbers = [45, 22, 13, 66, 105, 26, 88];
const result = anotherMysteryFunction(someNumbers);
console.log(result + "\n");



