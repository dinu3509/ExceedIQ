//using this keyword
//1) Regular Functions

function greet(){
    console.log(`Hi Iam ${this.namee}`);
}
const person ={
    namee:`Dinesh Reddy`,
    greet : greet,
}
person.greet();


//2) Arrow Functions :
const sayHello = () =>{
    return `Hello This is ${this.firstName}`;
}
const person2 ={
    namee:`Dinesh Reddy`,
    greet : greet,
    hello: sayHello
}
console.log(person2.hello())

//Using arguments keyword
function sum(){
    let su=0;
    for(let i=0;i<arguments.length;i++){
        su = su+arguments[i];
    }
    console.log(su);
}
sum(10,20,30,40,50,60,70,80,90,100);
sum(5,37,41);

//Primitives vs Objects:
const num = 3509;
const str = "Dinesh";
let bool = true;
const obj = {
    namee:"PEN",
    model:"XO",
    company:"Hauser"
};
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);

/**primitives are simple and stored directly, while objects are complex and stored by reference, allowing for mutable behavior.*/

//Reference in Objects:
const obj1 = {
    name:"Phone",
    brand:"Samsung",
    model:"Galaxy S24 Ultra"
};

const obj2 = obj1;

obj1.model="Galaxy S23 Ultra";
console.log(obj2.model);

/*objects are passed by reference, meaning variables store a reference to the same memory location. When an object is assigned to another variable or passed to a function, both refer to the same object. Changes made through one reference will affect the original object and any other references.*/

//Values in Primitives:
var num1 =10;
var num2 =10;

num1=15;

console.log(`The values of num1 and num2 after updating are ${num1} and ${num2} respectively.`);
console.log(num2);

//Coding Exercise:Primitives vs Objects with/without References:
function swapValues(obj1,obj2){
    if(typeof obj1==="object" && typeof obj2 === "object"){
    let temp = Object.assign({},obj1);
    Object.assign(obj1,obj2);
    Object.assign(obj2,temp);
    console.log("Values Swapped");
    console.log(obj1,obj2);
}else{
    let temp = obj1;
    obj1= obj2;
    obj2 = temp;
}

}

const pen1 = {
    namee:"PEN",
    model:"XO",
    company:"Hauser"
};

const pen2 = {
    namee:"PEN",
    model:"Vector",
    company:"Parker"
};
swapValues(pen1,pen2);

//Coding Related to Restaurant:
let restaurantMenu = [
    { name: 'Chicken Biryani', price: 15, ingredients: ['chicken', 'rice', 'spices', 'yogurt'] },
    { name: 'Apricot Delight', price: 7, ingredients: ['apricot', 'cream', 'sugar'] },
    { name: 'Dragon Chicken', price: 13, ingredients: ['chicken', 'sauce', 'capsicum', 'spices'] }
];
function addDish(name, price, ingredients) {
    restaurantMenu.push({ name, price, ingredients });
    console.log(`${name} has been added to the menu.`);
}

function removeDish(name) {
    const index = restaurantMenu.findIndex(k => k.name === name);
    if (index !== -1) {
        restaurantMenu.splice(index, 1);
        console.log(`${name} has been removed from the menu.`);
    } else {
        console.log(`${name} not found in the menu.`);
    }
}

function updateDish(name, newPrice, newIngredients) {
    const dish = restaurantMenu.find(dish => dish.name === name);
    if (dish) {
        dish.price = newPrice;
        dish.ingredients = newIngredients;
        console.log(`${name} has been updated.`);
    } else {
        console.log(`${name} not found in the menu.`);
    }
}

function calculateTotal(order) {
    const total = order.reduce((sum, dishName) => {
        const dish = restaurantMenu.find(dish => dish.name === dishName);
        return dish ? sum + dish.price : sum;
    }, 0);
    console.log(`The total price of your order is $${total}.`);
    return total;
}
addDish('Paneer Tikka', 10, ['paneer', 'spices', 'yogurt']);
removeDish('Dragon Chicken');
updateDish('Chicken Biryani', 16, ['chicken', 'rice', 'spices', 'yogurt', 'mint']);

const order = ['Chicken Biryani', 'Apricot Delight'];
calculateTotal(order); 


//Spread Operator
//- Use the spread operator to create a new array from an existing array.
const array = [1, 2, 3, 4, 5];
const spreadArray = [...array];
console.log(spreadArray)

//- Use the spread operator to copy an object and modify its properties.
const dinesh = {
    name: 'Dinesh Reddy',
    age: 19,
    occupation: 'Student'
};

const dinesh2 = { ...dinesh, age: 30 };
console.log(dinesh);
console.log(dinesh2);

//- Use the spread operator to combine multiple arrays into a single array.

const a1 = ['d', 'i', 'n'];
const a2 = ['e', 's', 'h'];
const a3 = [3, 5, ,0 ,9];

const a4 = [...a1, ...a2, ...a3];

console.log(a4); 

let n = "Dinesh";
splitName = n.split(''); 
console.log(splitName);

let joinedName = splitName.join(''); 
console.log(joinedName);

let paddedStart = n.padStart(10, '*'); 
console.log(paddedStart);


let paddedEnd = n.padEnd(10, '*');  
console.log(paddedEnd);


let slicedName = n.slice(0, 3); 
console.log(slicedName);

let reversedn = n.split('').reverse().join('');
console.log(reversedn);
function checkPalindrome(str){
    if (str==str.split('').reverse().join('')){
        console.log("It is Palindrome");
    }else{
        console.log("It is not a palindrome");
    }
}
checkPalindrome('DiD');
checkPalindrome('DiDi');

//- Use string methods like `slice`, `repeat`, `toLowerCase`, `toUpperCase`, `trim`, `replace`, and `replaceAll` for various string operations.
let namee = "  Dinesh    ";

let slicedName1 = namee.slice(0,3);
let repeated = namee.repeat(4);
let lowerCase = namee.toLowerCase();
let upperCase = namee.toUpperCase();
let trimmed = namee.trim();
let replaced = namee.replace('D','V');
namee = "Dinesh ReDDy";
let replaceAll = namee.replaceAll('D','Y');
console.log(`slicedName1-${slicedName1}\nrepeated->${repeated}\nlowerCase->${lowerCase}\nupperCase->${upperCase}\ntrimmed->${trimmed}\nreplaced->${replaced}\nreplaceAll->${replaceAll

}`);


//Booleans, length, indexOf, lastIndexOf, map:

//- Use boolean values and operators in conditional statements.
let isEducated =true;
let isWorking =false;

if(isEducated && isWorking){
    console.log("Person is educated and as well as earning")
}else if(isEducated){
    console.log("Person is educated but not earning.")
}else if(isWorking){
    console.log("Person is not educated but earning.")
}else{
    console.log("Person is not educated and is not earning as well.")
}

//- Determine the length of strings and arrays using the `length` property.
const str1 = "Hello, World!";
const str1Length = str1.length;
console.log(`Length of string: ${str1Length}`); 

const arr = [1, 2, 3, 4, 5];
const arrLength = arr.length;
console.log(`Length of array: ${arrLength}`);



//- Find the index of a substring within a string using `indexOf` and `lastIndexOf`.
const sampleString = "Dinesh is learning JavaScript";
const firstIndex = sampleString.indexOf("learning");
console.log(`First index of "learning": ${firstIndex}`);
const lastIndex = sampleString.lastIndexOf("a");
console.log(`Last index of "a": ${lastIndex}`); 

//- Use the `map` method to transform elements in an array into a new array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(`Squared Numbers: ${squaredNumbers}`);


//Set, delete, keys, pop, for...of loop, Map Iteration:

//- Create a Set and add elements to it.
const friends = new Set();
friends.add("Rohit");
friends.add("Deepak");
friends.add("Sohit");
friends.add("None");
console.log(friends);

//- Remove elements from a Set using `delete`.
friends.delete("None");
console.log(friends);

//- Iterate over a Set using a `for...of` loop.
for(let friend of friends){
    console.log(friend);
}

//- Convert an object to a Map and vice versa.
const student = {name:'Dinesh Reddy',age:19};
console.log(student);
const studentmap= new Map(Object.entries(student));

console.log(studentmap);
const mapToObj = Object.fromEntries(studentmap);
console.log(mapToObj); 

//- Perform operations on Maps using `get`, `set`, `delete`, `keys`, `has`, and `clear`.

studentmap.set('location', 'India');
studentmap.set('profession', 'Engineer');
studentmap.set('hobby', 'Gaming');

console.log(studentmap.get('name'));

studentmap.delete('age');
console.log(studentmap);

for (let key of studentmap.keys()) {
    console.log(key);
}