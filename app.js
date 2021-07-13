// Video 01 and 02
//Old Method to declare variables

// var life = 100; // this is the life bar

// life = 50;

// var name = 'Swaraj'; // this is the name

// var checkout = true; // a boolean

// var box; // undefined

// var abc = null; // null value

// object, symbol




// New way to create variable using let and const

// const life = 100; // a const
// life = 50; // it will give error as life is a const

// let life = 100; // a let which value can be changed
// life = 50; // it will not give error as it is a let


// console.log(life);





//Video 03
//Functions
// const name = "Swaraj";
// const youtuber = "hello world";

// function logger() { // sample function
//     console.log('Party Time'); //shift+alt+ down arrow to copy like this
//     console.log('Party Time');
//     console.log('Party Time');
//     console.log('Party Time');
// }

// logger(); // call the function


// function upperCase(text) {
//     // this is the first way to declare function, old way
//     const uppercased = text.toUpperCase();
//     console.log(uppercased);
// }

// const upperCase1 = function() {
//     //write function here
//     //this is the second way to declare function
// }

// const upperCase2 = () => {
//     //write function here
//     //this is the third way ti declare function, new way
// }

// upperCase(name);
// upperCase(youtuber);



// Video 04
//String concatenation
// console.log('Hello my name is ' + 'Swaraj'); //normal concatenation
// console.log('This is Swaraj\'s PC'); // using escape sequence
// const name = 'Swaraj';
// const age = 21;

// console.log(`Hello it's me and my name is ${name} and my age is ${age}`); // using back tick and dollar sign 
// const combined = name + age; // make it a string
// console.log(combined);
// console.log(typeof combined); // return the type of a data type




//video 05
//if else statement
const age = 10;
if (age > 18) {
    console.log('you are good to go');
} else if (age === 10) { // === matches data and datatype
    console.log('Your age is 10');
} else {
    console.log('Good Bye');
}