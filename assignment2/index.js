// Importing simple and compo functions
const { simple, compo } = require('./nodeapp');

// Using async-await to call simple function with parameters 1000, 10
const callSimple = async () => {
    let simpleResult = await new Promise(resolve => {
        setTimeout(() => {
            resolve(simple(1000, 10));
        }, 3000); // 3 seconds delay
    });
    console.log('Simple Interest:', simpleResult);
};

// Using async-await to call compo function with parameters 1000, 10
const callCompo = async () => {
    let compoResult = await new Promise(resolve => {
        setTimeout(() => {
            resolve(compo(1000, 10)); 
        }, 5000); // 5 seconds delay
    });
    console.log('Compound Interest:', compoResult);
};

// Calling functions
callSimple();
callCompo();
