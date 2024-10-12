// Step 1: Declare a simple function in script.js

function greet(name = "Veevek"){
    return "Hello " + name;
}

let firstName = greet();
let middleName = greet("Avish")
console.log(firstName);
console.log(middleName);



// Step 3: Create a function to add two numbers


function addNumbers(num1, num2) {
    return console.log(num1 + num2);
}

addNumbers(4,5);


// Part 3: Function Scope

let x = 10;

function changeValue() {
    let x = 7;
    console.log(x + " changeValue local");
    
}

changeValue();
console.log(x + " x global");


//  Part 4: Closures 


function outerFunction() {
    let count = 0;
    return function addOne() {
       count++;
       return console.log(count);
       ;

    }
    
}

let increase = outerFunction ();
increase();
increase();
