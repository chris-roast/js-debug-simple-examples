/**
 * This function logs how many elements are in an array, and attempts to add all the elements together.
 * 
 * @param {Array} array of integers
 */
exports.aMysteryFunction = (array) => {
    if (!Array.isArray(array)){
        console.log("UH OH, something's not right\n");
        return;
    }
    console.log(`This array has ${array.length} elements`);

    const count = array.reduce((a,b) => a+b);

    console.log(`This array has a total value of ${count}\n`);
}

/**
 * You'll need to figure this one out yourself...
 * 
 * @param {*} array 
 * @returns 
 */
exports.anotherMysteryFunction = (array) => {
    return array.reduce((previous, current) => {
        if (current > previous) return current;
        return previous;
    });
}