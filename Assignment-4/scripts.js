//SETS
//1)
let fruits = new Set(['apple', 'banana', 'orange', 'mango']);
console.log(`Number of fruits: ${fruits.size}`);

//2)
if (fruits.has('banana')) {
    console.log('Banana is in the set.');
  } else {
    console.log('Banana is not in the set.');
  }

 //3)
fruits.add('grape');
console.log(fruits);

//4)
fruits.delete('orange');
console.log(fruits);

//5)
fruits.clear();
console.log(fruits);

//6)
fruits = new Set(['apple', 'banana', 'orange', 'mango']);
for (const fruit of fruits) {
    console.log(fruit);
  }


//Looping Objects
//1)
const person = {
    name: 'Dinesh Reddy',
    age: 19,
    city: 'Visakhapatnam'
  };

//2)
const keys = Object.keys(person);
console.log(keys); 

//3)
const values = Object.values(person);
console.log(values);

//4)
const entries = Object.entries(person);
console.log(entries);

//5)
for (const key in person) {
    if (person.hasOwnProperty(key)) { 
      console.log(`${key}: ${person[key]}`);
    }
  }

//Optional Chaining
const user = {
    name: 'Dinesh Reddy',
    address: {
      street: 'NAD',
      city: 'Visakhapatnam'
    }
  };  
console.log(user.address?.city);
console.log(user.contact?.phone);  

//Advanced Functions
//1)
function bookFlight(destination = 'Delhi', departureDate = '20-11-2024') {
    console.log(`Flight booked to ${destination} on ${departureDate}.`);
  }
bookFlight();
bookFlight('Hyderabad', '15-10-2015');

//2)Pass by Value vs Pass By Reference
//Pass By Value
let number=1;
function a(number){
    number = number+1;
    console.log(`Values of number variable inside function is ${number}`)
}
a(number);
console.log(`Value of number variable outside function is ${number}`);

//Pass By Reference
const arr = [10,20,30,41,51,61,72,82,92];
function b(arr){
    arr.push(103);
    console.log(`Array inside a function is ${arr}`);
}
b(arr);
console.log(`Array outside the function ${arr}`)

//3)CallBack Functions

function callback(xfunction){
    let name ="Dinesh";
    let age =19;
    xfunction(name);
    xfunction(age);
}
function display (value){
    console.log(`Value = ${value}`);
}
callback(display);
//4)
function powerOf(exponent) {
    return function(base) {
      return Math.pow(base, exponent);
    };
  }
  const square = powerOf(2);
const toTheFourth = powerOf(4);
console.log(square(5));
console.log(toTheFourth(4));

//5)
function greet(message){
    return function(name){
        console.log( `${message}, ${name}`);
    }
}

const hello = greet('Hello');
const goodmorning = greet('Good Morning');

hello("Dinesh");
goodmorning("Dinesh");


//BUILT-IN FUNCTIONS
// 1)Create an object with properties and methods
let person1 = {
    firstName: "Dinesh",
    lastName: "Dharmala",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);   
  
    },
  };
  
const anotherPerson = {
firstName: "Rohit",
lastName: "Mandala",
};

person1.greet.call(anotherPerson); 

const greetings = ["Hello", "Hi"];
person1.greet.apply(anotherPerson, greetings); 

const boundGreet = person1.greet.bind(anotherPerson);
boundGreet(); 
//2)
const obj = {
  value: 10,
  regular: function() {
    console.log(this.value);
  },
  arrow: () => {
    console.log(this.value);
  }
};
obj.regular();
obj.arrow();

//IIFE
//1)
(function() {
    console.log('Good Evening');
  })();

//2)  

const result = (function() {
   return 'Good Evening Returned ';
})();

console.log(result);

//3)
const counter = (function() {
    let count = 0;
    return function() {
        count += 1;
        return count;
      };
    })();   
    
console.log(counter()); 
console.log(counter()); 
console.log(counter());    

//
function greet1() {
    console.log('Hello after 15 seconds');
  }
  
setTimeout(greet1, 15000);

//
let count = 0;

const intervalId = setInterval(() => {
  count += 1;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId); 
  }
}, 1000);

//DOM
//1)
let nee = document.getElementById('name');
console.log(nee.textContent);

//2)
nee.textContent= "Dharmala Dinesh Reddy";
nee.style.color='blue';

//3)
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const fruitList = document.getElementById('fruitList');

const fruitNames = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];
let currentIndex = 0;

addButton.addEventListener('click', () => {
    if (currentIndex < fruitNames.length) {
        const newFruit = document.createElement('li');
        newFruit.textContent = fruitNames[currentIndex];
        fruitList.appendChild(newFruit);
        currentIndex++;
    } else {
        alert('No more fruits to add.');
    }
});

removeButton.addEventListener('click', () => {
    if (fruitList.lastChild) {
        fruitList.removeChild(fruitList.lastChild);
        currentIndex--;
    } else {
        alert('No fruits to remove.');
    }
});


//4)
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
  alert('Button was clicked!');
});

const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseover', () => {
  hoverDiv.style.backgroundColor = 'lightblue';
});
hoverDiv.addEventListener('mouseout', () => {
  hoverDiv.style.backgroundColor = 'lightgray';
});

const textInput = document.getElementById('textInput');
textInput.addEventListener('keypress', (event) => {
  console.log(`Key pressed: ${event.key}`);
});