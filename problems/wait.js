
// Write a function to wait ms second
// function wait(ms) {...}

// console.log(1);
// wait(3000);
// console.log(2);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async() => {
    console.log('1');
    await wait(5000);
    console.log('2');
})();
