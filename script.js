let userName = "Umair Jamaat Ali"
console.log("User name is " + userName);


let userNumber = 03450712423; 
console.log("User Number is " + userNumber)

let firstVar = "Hello ";
let firstVar1 = "World";
let result = firstVar + firstVar1;
alert (result);

let sum = 5;
let sum1 = 7;
let result1 = sum + sum1;
console.log("Sum is =>" + result1);


let multi = 45;
let multi1 = 23;
let result2 = multi * multi1;
console.log ("Multiply is =>" + result2)


let sub = 56;
let sub1 = 34;
let result3 = sub - sub1;
console.log("Result is " + result3);


let divi = 81;
let divi1 = 27;
let result4 = divi / divi1;
console.log("Result of divi =>" + result4);


let modu = 63;
let modu1 = 10;
let result5 = modu % modu1;
console.log("Result of modul =>" + result5);

// Complax math operation

let question = (5 * 8) + 9 - 3;
console.log("Result is => " + question);

// boolen type data

let x = 6 < 7;
console.log ("Result is => " + x);


let x1 = 6;
let x2 = 7;
let result6 = x1 === x2;
console.log("Result is " + result6);


// some other math operations

let square = 7 ** 2;
console.log("Square is => " + square);
// User enter a number , whose taking square
let userEnterNumber =+ prompt("Enter a number")
let x3 = userEnterNumber ** 2;
console.log("X3 result is => " + x3);

// if else and if else if , statement
// write a js program to check number is even or odd to used if else statement

let userInput =+ prompt("Enter any number");
if(userInput % 2 === 0){
    console.log("You enter even number " + userInput);
}
else if(userInput % 2 !== 0 ){
    console.log("You enter odd number " +userInput);
}
else{
console.log("You enter not a number " + userInput);
}

// write a js program to check that user enter a number, alphabet or special character tob used if else if statement

let userInput1 = prompt("Enter any things");

if(userInput1 >= 0 && userInput1 <= 9 ){
    console.log("You enter a number " + userInput1)
}

else if(userInput1 >= "a" && userInput1 <= "z"){
    console.log("You enter an alphabet " + userInput1);
}
else{
    console.log("You enter special character " + userInput1)
}


// for loop

for( let i = 1; i <= 10; i++){
    console.log("2 X " + i + " = " + 2 * i);
}

let table =+ prompt("write a number");

for (let i = 1; i <= 20; i ++){
console.log( table + " X " + i + " = " + table * i)
}