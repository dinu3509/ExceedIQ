const money = 0;
if(money){
    console.log("Dont spend it all");
}else{
    console.log("yOU SHOULD GET A JOB");
}

let height =0;
if(height){
    console.log("Height is defined");
}else{
    console.log("Height is Undefined");
}


// const age ="18";
// if(age==18){
//     console.log("You can  Vote");
// }
// if(age===18){
//     console.log("You can vote triple===");
// }

// const favourite = Number(prompt("What is your facourite number?"));
// console.log(favourite,typeof favourite);
// if(favourite === 23){
//     console.log("Cool 23 is an amazing number");
// }else if(favourite===7){
//     console.log("7 is number which have value of 7");
// }else{
//     console.log("Number is not from 23 and 7");
// }

////Logical Operators: &&,||
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!(hasDriversLicense && hasGoodVision));
console.log(!(hasDriversLicense || hasGoodVision));

if(hasDriversLicense && hasGoodVision){
    console.log("Sarah is able to drive");
}else{
    console.log("Some else should drive");
}

const isTired = false;
if(hasDriversLicense && hasGoodVision && isTired){
    console.log("HI");
}


const scoreDolphins =(96+108+89)/3;
const scoreKoalas =(88+91+110)/3;

console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy");
}else if(scoreDolphins===scoreKoalas){
    console.log("The match is tied");
}

const day = "friday";
switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("Got to coding meetup");
        break;

    case "tuesday":
        console.log("prepare theory videos");
        break;
        
    case "wednesday":
        break;
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Go to a movie");          
    case "saturday":
        break;
    case "sunday":
        console.log("Go to ground");
        break
    default:
        console.log("Not a valid day");


}