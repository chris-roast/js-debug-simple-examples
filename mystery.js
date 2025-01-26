/**
 * This function logs how many elements are in an array, and attempts to add all the elements together.
 * 
 * @param {*} array of integers
 */
exports.aMysteryFunction = (array) => {
    console.log(`This array has ${array.length} elements`);

    const count = array.reduce((a,b) => a+b);

    console.log(`This array has a total value of ${count}\n`);
}