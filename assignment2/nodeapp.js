// Function declaration for simple
const simple = (principal, rate) => {
   
    // Log message to console
    console.log("Inside simple function");

    return principal * rate * 0.03;
};
// Exporting function simple
exports.simple = simple;

// Function declaration for compo
const compo = (principal, rate) => {
    // message to console
    console.log("Inside compo function");

    // Return calculated value 
    return principal * rate * 0.05;
};

// Exporting function compo
exports.compo = compo;
