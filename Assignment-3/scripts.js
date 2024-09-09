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


//) Arrow Functions :
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