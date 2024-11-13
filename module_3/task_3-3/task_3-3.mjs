"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function displayDate (){
    const d = new Date();
    printOut(d.toDateString("nb-NO"));
    printOut(newLine);
} 
displayDate();


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function releaseDate() {
    const today = new Date();
    printOut("Todays date: "+today.toDateString());
    const releaseDate = new Date("2025-05-14");
    
    const differenceInMs = releaseDate - today;
    
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    printOut(`Days until release date: ${differenceInDays}`);
    return differenceInDays;
}

let date = releaseDate();


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function sirkel(r){
    const d = r *2;
    const c = d * 3.14;
    const a = 3.14 * r^2;
    printOut(`Diameter = ${d}`);
    printOut(`Omkrets = ${c}`);
    printOut(`Areal = ${a}`);
    
}

sirkel(5467);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const myRectagle = {height:"8", width:"6"}

function rectangle(r){
    const c = 2*r.height + 2*r.width;
    const a =  r.height * r.width;
    printOut("Omkrets = " + c);
    printOut("Areal = " + a);
}
rectangle(myRectagle);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ETempratureType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}
function convertTemprature(aTemprature, aType) {
    let Fahrenheit = 0;
    let Celsius = 0;
    let Kelvin = 0;
    switch(aType){
        case ETempratureType.Celsius:
        printOut("Convert from Celsius");
        //convert to fahrenheit
        //fahrenheit = (Kelvin - 273.15)*9/5 + 32;
            Celsius = aTemprature;
            Fahrenheit = (Celsius * 9/5) + 32;
            Kelvin = Celsius + 237.15;
            break; 
        case ETempratureType.Fahrenheit:
            printOut("Convert from Fahrenheit");
            break;
        case ETempratureType.Kelvin:
            printOut("Convert from Kelvin");
            break;

    } //end switch

    printOut("Celsius = " + Celsius.toFixed());
    printOut("Fahrenheit = " + Fahrenheit.toFixed());
    printOut("Kelvin = " + Kelvin.toFixed());
} //end function

convertTemprature(37, ETempratureType.Celsius);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(grossAmount, aTaxGroup){
    let net = NaN;
    let TaxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;

    printOut("taxGroup " + TaxGroup);

    switch(TaxGroup){
        case "NORMAL": 
            vat = 25;
            break;

        case "FOOD":
            vat = 15; 
            break;
        
        case "HOTEL":
        case "TRANSPORT":
        case "CINEMA":
            vat=10;
            break;
    }
    if(!Number.isNaN(vat)){
    net = (100 * grossAmount) / (vat + 100);
    }else{
        net = NaN
    }
    return net; 
}


const netPrice1 = calculateNetPrice(100, "normal");
if(Number.isNaN(netPrice1)){
    printOut("Uknown VAT group");
}else{
    printOut("netPrice1 = " + netPrice1.toFixed(2));
}

const netPrice2 = calculateNetPrice(200, "food");
if(Number.isNaN(netPrice2)){
    printOut("Uknown VAT group");
}else{
    printOut("netPrice2 = " + netPrice2.toFixed(2));
}

const netPrice3 = calculateNetPrice(300, "hotel");
if(Number.isNaN(netPrice3)){
    printOut("Uknown VAT group");
}else{
    printOut("netPrice3 = " + netPrice3.toFixed(2));
}

const netPrice4 = calculateNetPrice(400, "goblins");
if(Number.isNaN(netPrice4)){
    printOut("Uknown VAT group"); 
    printOut("netPrice4 = " + netPrice4.toFixed(2));
}

printOut("netPrice1 = " + netPrice1.toFixed());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN*/

function convertSDT(Speed, Distance, Time){
    if(Speed === undefined){
        let Speed = (Distance / Time);
        printOut("Speed is: " + Speed + "km/t. ");
        printOut("Distance is: " + Distance + " km. ");
        printOut("Time is: " + Time + " hours. ");
    }else if(Distance === undefined){
        let Distance = Speed * Time;
        printOut("Distance is: " + Distance + " km. ");
        printOut("Speed is: " + Speed + "km/t. ");
        printOut("Time is: " + Time + " hours. ");
    }else if(Time === undefined){
        let Time = Distance / Speed;
        printOut("Time is: " + Time + " hours. ");
        printOut("Speed is: " + Speed + "km/t. ");
        printOut("Distance is: " + Distance + " km. ");
    }else if(Distance && Time === undefined){
        return(NaN);
    }else if(Speed && Time === undefined){
        return(NaN);
    }else if(Distance && Speed === undefined){
        return(NaN);
    }
}

convertSDT(80, 100, undefined);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out*/

function modifyTextString(text, maxSize, character, insertAtEnd){
    while (text.lenght < maxSize){
        text = insertAtEnd ? text + character : character + text;
    }
    printOut(text);
    return text;
}

modifyTextString("Hello", 10, "*", true);
modifyTextString("Hello", 10, "-", false);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun(){
    let op = 1;
    let line = 1;
    //left side
    let ok = false;
    do{
    let sumLeft = 0;
    for(let left = 0; left < line + 1; left++){
        sumLeft += op;
        op++;
    }

    let sumRight = 0;
    for(let right = 0; right < line; right++){
        sumRight += op;
        op++;
    }

    if(sumLeft !== sumRight){
        ok = false;
        printOut("Error in line " + line.toString());
    }else{
        ok = true;
        //på en eller annen måte må vi stoppe functions 
    } 
    line++;
    
    
    if(line > 200){
        printOut("Math is fun!");
        break;
    }

}while (ok);
}
testIfMathIsFun();

printOut("  ");

const countTo = 10;

function count(aNumber){
    if (aNumber <= countTo){
        printOut(aNumber.toString());
        count(aNumber + 1);
        printOut(aNumber.toString());
    }
   
}

count(1);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer*/

function factorial(n) {
    if (n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateAndPrintFactorial(num){
    const result = factorial(num);
    printOut(`Factorial or ${num} is: ${result}`);
}

calculateAndPrintFactorial(5);
calculateAndPrintFactorial(6);


printOut(newLine);
