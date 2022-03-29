'use strict';
console.log('app js is connected.');


//prompt our users for input.

let userName;
console.log('user name', userName);


// while(!userName){
//   userName = prompt('Enter your name!');
// }

// alert('Hello ' + userName);


// let lowerCaseName = userName.toLowerCase();


//Validate the input using conditional logic using strict equals

// if(lowerCaseName === 'craig' || lowerCaseName === 'bob'){
//   alert('Welcome back ' + userName);
// } else {
//   alert('Welcome new user to our site.');
// }



// logical operator example
// let myBooleanValueTrue = true;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = true;
// let myBooleanValueTrue = true;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = false;
// let myBooleanValueTrue = false;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = true;
let myBooleanValueTrue = false;
let anotherBooleanValueFalse = false;
let thirdBooleanValueTrue = false;
//        true        and        true
if(myBooleanValueTrue && thirdBooleanValueTrue){

  alert('The && will run if both are true');
  console.log('both were true');
//                    true  or    true
} else if(myBooleanValueTrue || anotherBooleanValueFalse){
  alert('The || will run if one of the values is true.');
  console.log('at least one value was true');

} else if (thirdBooleanValueTrue){
  alert('the 3rd value was true so this last else if has fired.');
} else {
  console.log('There was no true values');
}


// creat an empty array

let emptyArray = [];
console.log('this is empty',emptyArray);

let quizAnswers = ['b','c','d','e','c','c','c'];
console.log(quizAnswers);


//nested Array
let nestArray = [['yes', 'y'],['no', 'n'],['maybe', 'maybe not']];
console.table(nestArray);


let nestArrayMultipleLine = [
  ['yes', 'y'],
  ['no', 'n'],
  ['maybe', 'maybe not']
];
console.log(nestArrayMultipleLine);
