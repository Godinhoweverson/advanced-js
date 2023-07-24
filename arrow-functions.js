/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b){
    //code block
    return a + b
}
let sum = addTwoNumbers(1, 2);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers1 = (a , b) => {
    return a + b;
};

let sum1 = addTwoNumbers1(1, 2);
console.log(sum1);


// Single Line Arrow Function With Parameters
// also valid  (required with multine returns)
// const addTwoNumbers2 = (a , b) => (a + b); also valid
const addTwoNumbers2 = (a , b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);


// Implicit Returns
const saySomenthing = message => console.log(message);
saySomenthing('Hello there!');

//without paramenters
const sayHello = () => console.log('Hello')
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    this is multiline string!
    </p>`
)
console.log(returnMultipleLines());

