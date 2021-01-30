// This is a standalone file that gives the output in the VSCode terminal.
// Example using 3 promises to show how Promise.all works when all three promises resolve. To test this, simply save this file and run it.
// To test it how it behaves when one of the promises fail, you can comment out code on line number 14 & 15 AND uncomment the code on line number 16 & 17. Save and run the code to see that if one promise fails, the Promise.all will not be resolved for any of the other promises that are called together.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(10);
        // console.log('The second promise has rejected');
        // reject('Failed');
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});

Promise.all([p1, p2, p3])
    .then(results => {
        const total = results.reduce((p, c) => p + c);

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    })
    .catch(error => {
        console.log(error);
    });