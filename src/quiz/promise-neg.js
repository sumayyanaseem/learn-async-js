const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function logRowWithNegativeNumber(arr, rowIndex) {
    return new Promise((resolve, reject) => {
        console.log('Log called ... ');
        if (arr.length > rowIndex) {
            setTimeout(() => {
                const hasNegative = arr[rowIndex].some((e) => e < 0);
                if (hasNegative) {
                    console.log(`Row ${rowIndex} has at least one negative number.`);
                    resolve(rowIndex);
                } else {
                    reject(`Row ${rowIndex} does not have any negative number.`);
                }
            }, 0);
        } else {
            console.log('Rejecting ... ');
            reject('Index out of bounds');
        }
        console.log('Returning from log');
    });
}

const promises = [];

for (let x = 0; x < array2D.length; x++) {
    promises.push(logRowWithNegativeNumber(array2D, x));
}

Promise.any(promises)
    .then((firstRowIndexWithNegative) => {
        console.log(`negative number: ${firstRowIndexWithNegative}`);
    })
    .catch((error) => console.log(error));