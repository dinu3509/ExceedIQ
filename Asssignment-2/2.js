//Return Statement
//1) calculateArea()
function calculateArea(length,width){
    return length*width;
}
console.log(calculateArea(5,6));

//2 factorial()
function factorial(n){
    if(n<2){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(6));

//3 greet()
function greet(namee){
    return `Hello, ${namee}! Welcome to GITAM University.`

}


//Function Declarations vs Expressions

//1) sayHello Declaration
function sayHello() {
    console.log("Hello, world!");
}

//2)
let greetUser = function(name) {
    console.log(`Hello, ${name}! Welcome to GITAM University`);
};

//3)
/*
Function Declaration:Declaring a function with specific name and the function is hoisted completely . We can call this function even before its defined.
Expression:Function Expression are like arrow and anonymous functions. They are not hoisted completely .We can use these function only after their definition.
*/ 


//Anonymous Functions
//1)
let sum = function(a,b){
    return a+b;
};
console.log(sum(51,42));

//2)
setTimeout(function() {
    console.log("This message is displayed after a 5-second delay.");
}, 5000);

//3)
/*
Anonymous functions are functions that don't have a name. They are used when we dont need to name a function. They are assigned to a variable .
Usecases: Callback Functions(No need of using more than once)
*/ 

//Arrow Functions
//1) double()
let double = (a)=>{
    return a*2;
};

//2) greet()
let greete = (namee)=>{
    console.log(`Hello, ${namee}! Welcome to GITAM University`);
};

//3
const number = [10,20,30,40,50];
number.forEach(num=>{
    console.log(num**2);
});
//Coding Exercises
//Prime Number
var isPrime = function (n){
    flag=0
    for(i=2;i<n/2;i++){
        if (n%i==0){
            flag=1;
            break;
        }
    }
    if(flag==1){
        console.log(`${n} is a prime number.`)
    }else{
        console.log(`${n} is not a prime number.`)
    }
}
isPrime(10);
isPrime(5);

// Reversing String
var reverseString = (strin)=>{
    a=``;
    for(i=strin.length-1;i>=0;i--){
        a=a+strin[i];
    }
    console.log(a);
}
reverseString(`Dinesh`);

//Fibonacci Series
function fib(n){
    if(n<0){
        return "Invalid Input";
    }
    else if (n<=1){
        return n;
    }else{
        return fib(n-2)+fib(n-1);
    }
}
console.log(fib(8));
console.log(fib(10));
console.log(fib(-1));

/*function fib(n){
    var a=0,c,b=1;
    if(n==1){
        console.log(a);
    }else if(n==2){
        console.log(b);
    }else if(n>2){
    while(n>2){
        c=a+b;
        a=b;
        b=c;
        n--;
    }
    console.log(c);
    }else{
        console.log('Invalid Input');
    }
}
fib(1);
fib(8);
fib(-1);*/

//Function Calling Other Functions
//Calculating Total Price using calculateItemPrice
let price = [100,256.3,5468,120,10000]
let quantity = [2,6,5,4,1]
function calculateItemPrice(n){
return price[n]*quantity[n];
}
function calculateTotalPrice(n){
    var totalPrice=0;
    for(var i=0;i<n;i++){
        totalPrice=totalPrice + calculateItemPrice(i);
    }
    console.log(totalPrice);
}
calculateTotalPrice(price.length);

//Function break down complex tasks into smaller taskes which will improve readability and reusability. Code is understandable easily when it is broken into pieces.

//REVIEWING FUNCTIONS
//1)
function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//for larger values of n it might be inefficient
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(`Value of 6 factorial using iterative method${factorial(6)}`);










//Arrays
//1)
var fruits =[`Apple`,`Banana`,`Mango`,`Grapes`,`DragonFruit`,`Papaya`,`WaterMelon`,`MuskMelon`];

//2)
console.log(fruits[2]);

//3)
fruits.push(`Banana`);

//4)
console.log(`${fruits.shift()} is removed from fruits`);

//5)
for(var i=0 ; i<fruits.length;i++){
    console.log(fruits[i]);
}


//Objects
//1)
person = {
    fullName : "Dinesh Reddy Dharmala",
    age : 19,
    city : 'Visakhapatnam'

};
console.log(person);
console.log(typeof(person));
//2)
console.log(person.age);
console.log(person['age']);
//3)
person.occupation="Student";

//4)
car = {
    model:"XUV 700",
    make:"Mahindra",
    year:"2023",
     
    }
//5)
car.startEngine = function(){
    console.log("Engine Started");}
car.startEngine();

//ITERATION

//1)
for(var i=1;i<11;i++){
    console.log(i);
}

//2)
var n= 10;
var fact=1;
while(n>0){
    fact =fact * n;
    n=n-1;
}
console.log(fact)

//3)


//Behind the scenes
//1)
/*Global Variables are  declared outside any function or block accessible throughout the entire code, including inside functions.
local variables are declared within a function or block, only accessible within that specific function or block. */

//2)
let global = "global var";

function gloVsLoc() {
    let local = "I'm a local variable";
    console.log(global);  
    console.log(local);   
}

gloVsLoc();

console.log(global);  
console.log(local);  //Cant be accessed beacuse it is only confined to above function gloVsLoc

//3)Hoisting is mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.
//Variables declared with var are initialized with undefined when hoisted.
//Function declarations are hoisted and can be used anywhere in the code before thier actual definition.

//SCOPE OF VARIABLES CONTINUED
//1)
function outerFunction() {
    let outerVar = "outer function";

    function innerFunction() {
        let innerVar = "inner function";
        console.log(outerVar);
        console.log(innerVar);//innervar is not defined
    }

    innerFunction();
    console.log(outerVar);
    console.log(innerVar);
}

outerFunction();

//2)
//let declares variables that are block-scoped, meaning they are limited to the block, statement, or expression where they are used.
//const declares variables that are block-scoped and must be initialized at the time of declaration. The value cannot be reassigned.

//3)
//Understanding variable scope is crucial for avoiding naming conflicts, ensuring encapsulation, and improving code readability. It helps prevent bugs and unintended side effects by making variable usage predictable and manageable.

//Hoisting: Variables, Functions	
//1)

greet();  

function greet() {
    console.log("Hello");
}
//function declarations are fully hoisted(Both the function name and body of function are hoisted. they are moved to top of their scope )
//greet is called before its actual definition(it works due to hoisting of greet function)

//2)
//Variable declarations are hoisted  with the initializations of an undefined value(assigns an undefined value).
//let and const are hoisted but they are not initialized.(Hence it shows error)

//3)
//Hoisting can lead to unpredictble behaviour , especially with var which initializes varaibles as undefined. to avoid these issues use let and const it enhances code clarity and reduces the errors related to hoisting.