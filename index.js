// var myName = "Shakhawat Hossain";
// console.log(myName);

// var age = 25;
// var price = 10.25;
// console.log(age);
// console.log(price);

// var isTrue = true;
// var isFalse = false;
// console.log(isTrue);
// console.log(isFalse);

// var undefinedVar;
// console.log(undefinedVar);

// var emptyValue = null;
// console.log(emptyValue);

//todo Type conversion

// var myNumber = "10";
// console.log(typeof myNumber);

// myNumber = Number(myNumber);
// console.log(typeof myNumber);

// myNumber = String(myNumber);
// console.log(typeof myNumber);

//todo Operators

// var a = 8;
// var b = 3;
// var c = a % b;
// console.log(c);

// var x = 5;
// var y = 10

// console.log(x == y);
// console.log(x != y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <=y );

// var a = 10;   //Number
// var b = "10"; //String

// console.log(a == b);
// console.log(a === b);

// var a = 5;
// a++
// a++;
// console.log(a);

// a--;
// console.log(a);

// var a = 5;
// // a++;
// console.log(a);

// ++a;
// console.log(a);

// var a = 5;
// var b = 7;

// var c = a++ + ++b + 3;
// console.log(a);

// console.log(c);

// var x = 8;
// var y = 9;

// var z = x-- + --y;
// console.log(z);

// if/else else/if statement

// var age = 10;

// if (age < 18) {
//     console.log("You can not vote");
    
// }
// else{
//     console.log("You can vote");
    
// }

// var age = 51;

// if (age <= 3) {
//     console.log("You are a child");
    
// } else if (age > 3 && age < 10) {
//     console.log("You are boy");
    
// } else if (age > 10 && age < 20) {
//     console.log("You are young");
    
// } else if (age > 20 && age < 40) {
//     console.log("You are middle age");
    
// } else {
//     console.log("You are old");
    
// }

// var dayNumber = 7;

// if (dayNumber ==1) {
//     console.log("Saturday");
// }
// else if (dayNumber ==2) {
//     console.log("Sunday");
    
// }
// else if (dayNumber ==3) {
//     console.log("Monday");
    
// }
// else if (dayNumber ==4) {
//     console.log("Tuesday");
    
// }
// else if (dayNumber ==5) {
//     console.log("Wednesday");
    
// }
// else if (dayNumber ==6) {
//     console.log("Thursday");
    
// }
// else if (dayNumber ==7) {
//     console.log("Friday");
    
// }
// else {console.log("Invalid day");
// }

// todo Switch case

// var dayNum = 4;

// switch (dayNum) {
//      case 1:
//      console.log("Saturday");
//      break;
//      case 2:
//      console.log("Sunday");
//      break;
//      case 3:
//      console.log("Monday");
//      break;
//      case 4:
//      console.log("Tuesday");
//      break;
//      case 5:
//      console.log("wednesday");
//      break;
//      case 6:
//      console.log("Thursday");
//      break;
//      case 7:
//      console.log("Friday");
//      break;
        
//      default: 
//      console.log("Invalid Number");
           
// }


// var monthNum = "twelve";

// switch (monthNum) {
//     case "one":
//         console.log("January");
//         break;
//         case "two":
//         console.log("February");
//         break;
//         case "three":
//         console.log("March");
//         break;
//         case "four":
//         console.log("April");
//         break;
//         case "five":
//         console.log("May");
//         break;
//         case "six":
//         console.log("June");
//         break;
//         case "seven":
//         console.log("July");
//         break;
//         case "eight":
//         console.log("August");
//         break;
//         case "nine":
//         console.log("September");
//         break;
//         case "ten":
//         console.log("October");
//         break;
//         case "eleven":
//         console.log("November");
//         break;
//         case "twelve":
//         console.log("December");
//         break;
//         default:
//         console.log("Invalid Month");
                
// }

// Functional Scope

// function calculateTax(amount) {
//     var taxrate = 0.01;          // functional scope variable
//     var tax = amount * taxrate; // accessible within theb function
//     return tax 
// }
// console.log(calculateTax (2500));

// Block Scope

// function checkUserStatus(isLoggedIn) {
//     if(isLoggedIn) {
//         let message = "Welcome back user"  //Block-scope variable
//         console.log(message);  // Accesible inly within this block
        
//     } else {
//         let message = "Pleae loggedin first then continue"  // Another Block-scope variable
//         console.log(message);   // Accesible inly within this block
        
//     }
// }
// checkUserStatus(true);
// checkUserStatus(false);


// let globalMsg = "this is global and its accessible anywhere in this code file "

// {
//     let blockMsg = "This is blocked scope"
//     console.log(blockMsg);
//     console.log(globalMsg);
      
// }

// console.log("This is outside the block::====", globalMsg);


/// Lexical Scope

// let globalVar = "I am global variable"

// function outerFunction(){          //Parent function
//     let outerVariable = "I am from outer scope"

//     function innerFunction() {    //Child function   
//         console.log(outerVariable); 
//         console.log(globalVar);
//         let innerVariable = "I am inner variable"
//         console.log(innerVariable);  // working becasue its in inner function
        
         
//     }
//     innerFunction()
//     console.log(innerVariable); // not working because its outside from inner function(parent/child issue)
    
// }

// // outerFunction()

// function checkDiscount(age) {
//     let discountmsg = "no discount available"

//     if(age>60) {
//         let  discountmsg = "senior citizen discount apply"
//         console.log("child scope", discountmsg);  
//     } 
//     else {
//         console.log("parent scope", discountmsg);
//     }
// }

// checkDiscount(45)

/// SetTimeout
///syntex (callback, delay, argument) (jei jinish run korate chai-argument)

// console.log("its start time");

// setTimeout (() => {
//     console.log("This code will be run after 5 sec");
    
// }, 5000) ;
// console.log("its end time");

/// SetInterval

/// syntax =>  setInterval (callback, delay, arguments)

// let count = 0;
// const intervalid = setInterval ( () =>{
//     count++;
//     console.log(count);
//     if (count ===5) {
//         clearInterval (intervalid)
//     }
    
// }, 3000)

/// Try & catch block

// try {
// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");
// console.log(a);
// console.log("Hello 4");
// console.log("Hello 5");
// console.log("Hello 6");
// } catch (err) {
//     console.log("something error happen");
//     console.log(err);
// }
// console.log("Hello Opu"); // (this log should print after finding the error)


/// for loop

// for (initialization; condition; iteration/updation) {
//     //code to execute
// }

// for (let i =1; i<=10; i++) {
//     console.log("current iteration", i); 
// }


///for...in loop (used in object & array in JS) => object er key iterate kora hoy

// for(key in object) {       //syntax
//     //code block to execute
// }

// let studentMarks = {
//     Alice: 85,
//     Bob: 91,
//     Charlie: 87
// };

// for(let student in studentMarks) {
//     console.log(`${student} scored ${studentMarks[student]} marks`);
    
// }


///for...of loop    => object er value iterate kora hoy/ array er value er shathe kaj kore

// for(value of updation/iterable) {   //syntax
//     //code block to execute
// }

// const fruits = ["Apple", "Banana", "Cherry"];

// for(let fruit of fruits) {
//     console.log(`i like ${fruit}`);   
// }

// const name1 = "Shakhawat"

// for(let letter of name1) {
//     console.log(`The letter is ${letter}`);   
// }


/// forEach loop in Javascript

// iterable.forEach(callbackFunction(element, index, iterable), thisArgumnts)

// let studentsMap = new Map([
//   [101, "Alice"],
//   [102, "Bob"],
//   [103, "Charlie"]
// ])

// console.log("Students Data");

// studentsMap.forEach((name, id) => {
//     console.log(`ID: ${id}, name is ${name}`);  
// })


///function (Live Class)


// var myName = "Shakhawat";
// //Function Declaration
// function greeting() {
//   console.log("Hello", myName);
// }
// greeting();

//Function Expression (we can create function inside variable)

// const greet = function () {
//   console.log("Hello function expression");
// }
// greet();

// const calculator = function (a, b) {
//   console.log(a + b); 
// }

// calculator(4, 5);
// calculator(8, 5);
// calculator(10, 5);
// calculator(15, 5);
// calculator(20, 5);

// function greet2(name = "Opu") {
//   console.log("My name is", name);
// }

// greet2("SH"); // If we provide value in argument SH then it print arguments value otherwise will show default value

//todo Arrow Function

// const sum = (x, y) => {
//  var sum = x + y;
//  console.log("The summation of two number is", sum);
// }

// sum(5, 6);

//single statement return korar jonno curly braces return na likhe directly evabe lekha jay
// const sum = (x, y) => x + y;
// console.log(sum(5,6));   

// Jodi parameter  1ta thakle parenthesis daoar dorkar nai
// const sum = x => x * 2;   // Function variable const daoa hoy karon we reuse it
// console.log(sum(5));

// function fun(a, b) {
//     return a * b
// }
//  var multiply = fun(5, 6)
//  console.log(multiply);

/// returning a function

// function multiply(x) {
//     return function(y) {    //annonymous function
//         return x * y
//     }
// }
//  const mult = multiply(2)
//  console.log(mult (4));

/// destructuring parameters
/// `` backtick use kore amra ekshathe ekta string ba text plus variable ba number use korte pari

// function user({ name, age, email}) {
//     console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
    
// }
// user({
//     name: "Opu",
//     age: 25,
//     email: "opushakhawat@gmail.com"
// });
 

/// While loop
//  while(condition) {     // syntax
//     // code to execute
//    }

// let countDown = 10;
// console.log("countDown Strats");
// while (countDown > 0) {
//     console.log(`count time left: ${countDown} seconds`);
//     countDown--;
// }
// console.log("countDown ends");


///do while loop

// let count = 1;
// do {
//     console.log("count is", count);
//     count++;
// } while (count <= 7);

//     console.log("count down complete");

// let num = 39;
// let i = 1;
// do {
//     console.log(`${num} * ${i} = ${num * i}`);
//     i++
// } while (i <=10);
//     console.log("multiplication table completed");


/// JavaScript Array
// syntax
// const number = [value]   // literal syntax
// const number = new  Number(value1, value2, value3)  // constructor syntex

// const colors = ["Red", "Green", "Blue"]     /// index start from 0,1,2,3
// // console.log(colors [1]);

// colors[1]="yellow";   // modify by reassigning index color number
// console.log(colors [1]);


/// Array in JavaScript (Live class)

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]);

// let colors = ["red", "blue"];

// colors.push("green");
// colors.push("yellow");
// colors.unshift("cyan");   // array er 1st a kono kichu boshate unshift use kora hoy
// colors.pop();           // array te kono kicu remove kore last er dik theke (pop)
// colors.shift();         // array te kono kicu remove kore 1st er dik theke (shift)

// console.log(colors.length);

// let fruits = ["apple", "banana", "orange", "grape"];

// console.log(fruits.indexOf("banana"));  // index number ber korar jonno .indexOf use kora hoy

// console.log(fruits.includes("mango")); //array te kono data ache kina check korar joono .inludes use kora hoy

// let slicedArray = fruits.slice(1, 3); 
// slicedArray.forEach(function(fruit){
//     console.log(fruit);  
// })

// let text = fruits.join(',')    //(like banana, orange, grape) comma dia jure dibe
// console.log(text);


//iterate kora mane puro array ta ekbare read kora
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })


// Object in JavaScript (Live Class) -> ekjon er refrence a onekgulo data store kora
// -> ekadhik data ke kono ekta single data er reference a amra store korte pari
// -> key & value pari hishebe store kora hoy. like name(key): opu(value);

// let person = {
//     name: "Opu",
//     age: 25,
//     city: "Dhaka"
// }

//object er baire  object name dhore data add korte pari
// person.email = "opushakhawat@gmail.com";
// person.id = 5;
// console.log(person["email"]);  // aivabe data accsess kora ke bola hoy bracket notation

//bracket notation use kore o data add kora jay object name call kore
// person["phone"] = "01756668695";
// console.log(person.phone);

// modifying data
// person.city = "Dhaka"
// console.log(person.city);

// for delete data
// delete person.city;   
// console.log(person.city);


//empty object ->  let empty = {};

// let myName = person.name;
// console.log(myName);

// console.log(person.age);  //aivabe data accsess kora ke dot notation bola hoy


///Object Methods

// let car = {
//     brand: "Toyota",
//     model: "Premio",

//     start: function () {
//         console.log("The car is starting");  
//     },

//     //shorthand method/function by removing colon & function
//     stop () {
//         console.log("The car is stopping");   
//     }
// }
// car.start();
// car.stop()


/// Nested object

// let student = {
//     name: "opu",
//     age: 20,
//     grades: {
//         math: 90,
//         science: 85,
//         english: {
//             writing: 88,
//             reading: 92
//         }
//     }
// }
// console.log(student.grades.math);
// console.log(student.grades.english.reading);


///Character at() in string method using JavaScript (Recorded Class)
// syntax-> string.charAt(index);

// let greeting = "Hello World";
// let firstCharacter = greeting.charAt(0)

// console.log(firstCharacter);
// // console.log(greeting.charAt(0));    ->alternative way to print

///charCodeAt in JavaScript string method
// syntax-> string.charCode(index);

// let greeting ="Hello World";
// let unicodeValue = greeting.charCodeAt(0);

// console.log(unicodeValue);
// //console.log(greeting.charCodeAt(0));    ->alternative way to print


///concat in JavaScript-> dui ba tar theke beshi string ke merge kore ekta string a convert kore (it does not modify original string)
// syntax-> string1.concat(string2, string3, ...AbortController.apply.stringN)

// let firstName = "Jhon";
// let lastName = "Sina";
// // let fullName = firstName.concat(" ", lastName);
// // console.log(fullName);

// console.log(firstName.concat(" ", lastName));     //->alternative way to print



///Include method in javascript using string
// syntax-> string.includes(subString, startIndex)    (by default 0 thake. start index optional thakbe)

// let sentence= "Javascript is a versatile language";
// // let containsWord = sentence.includes("versatile");
// // console.log(containsWord);

// console.log(sentence.includes("versatile"));         //->alternative way to print

// let email = "user@gmail.com";
// if (email.includes("@")) {
//     console.log("valid email address");
    
// } else {
//     console.log("invalid email address");   
// }


///Indexof om JavaScript
// syntax-> string.indexOf(searchValue, startIndex);  //startIndex optional and by default 0 thake.

// let sentence = "Javascript is versatile and powerful";
// let position = sentence.indexOf("versatile");
// console.log(position);


///last indexOf in Javascript
// syntax-> string.lastindexOf(searchValue, startIndex); //startIndex optional and by default 0 thake.

// let sentence = "Javascript is versatile, and Javascript is powerful";
// let position = sentence.lastIndexOf("Javascript");
// console.log(position);


///Replace & replaceAll in javascript string
// syntax-> string.replace(pattern, replacemnt) pattern hocche existing value.

// let sentence = "I have a dog and a cat";
// let newSentence = sentence.replace("cat", "rabbit");
// console.log(newSentence);
// console.log(sentence.replace("cat", "horse"));   //-> alternative way to print

// let sentence2 = "I have a dog and a cat, and a cat, and a cat";
// let newSentence2 = sentence2.replaceAll("cat", "rabbit");
// console.log(newSentence2);


///Slice & split im JavaScript
// syntax-> stirng.slice(start, end)

// let sentence = "Hello everyone!";
// console.log(sentence.length - 1);

// let newSentence = sentence.slice(6, 14);
// console.log(newSentence);

// slice homework
// let sentence = "Bangladesh shares land borders with India to the north, west, and east, and Myanmar to the southeast. To the south, it has a coastline along the Bay of Bengal. To the north, it is separated from Bhutan and Nepal by the Siliguri Corridor, and from China by the mountainous Indian state of Sikkim. Dhaka, the capital and largest city, is the nation's political, financial, and cultural centre. Chittagong is the second-largest city and the busiest port of the country. The official language is Bengali. Islam is the official and largest religion and Bengali Muslims form the largest ethnoreligious group in the country. "

// let length = sentence.length;
// console.log(length - 1);
// console.log(sentence.indexOf("largest"));
// console.log(sentence.slice(319, 617));

//syntax-> string.split(seperator, limit)
//split hocche ekta string ke array of substring a convert kore dey.
// let sentence = "JavaScript is awesome!";
// let words = sentence.split(" ");
// console.log(words);


/// toLowerCase and toUpperCase
// syntax-> string.toLowercase()

let mixString = "jaVaScripT";
let lowerCaseString = mixString.toLocaleLowerCase();
console.log(lowerCaseString);

let toUpperCase = mixString.toUpperCase();
console.log(toUpperCase);


print("Hello this is opu")


























    








