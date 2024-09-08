//Variables
//1)
var fullname="Dinesh Reddy";
const age = 19;
const city = "Visakhapatnam";
const Student = true;
let nullValue = null;    
let undefinedValue;   

//2)
const pi =3.14159;

//3)
const greeting = "Hello, world!";

//4)
const isSunny = true;

const favouriteNumber=3509;

//DataTypes
//1)
console.log(`The datatype of name is ${typeof fullname}`);
console.log(`The datatype of age is ${typeof age}`);
console.log(`The datatype of city is ${typeof city}`);
console.log(`The datatype of student is ${typeof Student}`);
console.log(`The datatype of nullValue is ${typeof nullValue}`);
console.log(`The datatype of undefinedValue is ${typeof undefinedValue}`);
console.log(`The datatype of pi is ${typeof pi}`);
console.log(`The datatype of greeting is ${typeof greeting}`);
console.log(`The datatype of isSunny is ${typeof isSunny}`);
console.log(`The datatype of favouriteNumber is ${typeof favouriteNumber}`);

//2)
var DOB = "04-12-2004"
var mixedValue = "Dinesh's age is "+age+" and his DOB is "+DOB;
//3)
console.log(mixedValue);
console.log(typeof mixedValue);

//Operators
//1)
var a=10;
var b= 5;
var c ="10";
console.log(`The addition of ${a} and ${b} is ${a+b}`);
console.log(`The subtraction of ${a} and ${b} is ${a-b}`);
console.log(`The multiplication of ${a} and ${b} is ${a*b}`);
console.log(`The division of ${a} and ${b} is ${a/b}`);
console.log(`The modulus of ${a} and ${b} is ${a%b}`);
console.log(`The exponentiation of ${a} and ${b} is ${a**b}`);

//2)
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b);
console.log(a>b);
console.log(a<b);
console.log(a==c);
console.log(a===c);

//3)
if(a>5 && b>=5){console.log("Greater");}
if(a<=10 || b<=10){console.log("Lower");}
if(!(a && b)){console.log("It is not working");}

//4)
const age1 = 19;
const canVote = age1 >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote,typeof canVote);

//Additional Tasks
//1)
var Ftemp = 211;
var Ctemp = (Ftemp-32)*(5/9);
console.log(Ctemp);

//2)
var agee = 54;
if(agee<18 && agee>0){console.log("Minor");}
else if(agee>=18 && agee<60){console.log("Adult");}
else if(agee>=60){console.log("Senior Citizen");}