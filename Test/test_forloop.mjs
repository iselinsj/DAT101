"use strict";
import { initPrintOut, printOut } from "../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("Dette er en test");

/*lag en for løkke som teller fra 0 til 10 skriv ut alle tallene på en linje */

let result = "";
for ( let i = 0; i < 10; i++){
    result += i.toString();
    if(i < 9){
    result += ", ";
    }
}
printOut(result.toString());



/*lag en tabell med fem bilmerker*/

const Car = ["Toyota", "Audi", "BMW", "Mercedes", "Ford", "Opel"];
let text = "";

for(let index = 0; index < Car.length; index++){
    text += Car[index];
    if(index < Car.length - 1){
        text += ", "
    }
}
printOut(text);
text = "";

Car.forEach(checkCar);
printOut(text);

function checkCar(aCar, aindex){
    text += aCar;
    if(aindex < Car.length - 1){
        text += ", "
    }
}

const value = Car.find(findCar);
printOut(value);

function findCar(aCar){
    printOut(aCar);
    if(aCar === "Mercedes"){
        printOut("Sorry, Mercedes is not suposed to be here!");
        return true;
    }
    return false; 
}

const filter = Car.filter(filterCar);
printOut(filter.join(", "));

function filterCar(aCar){
    if(aCar.toUpperCase().includes("O")){
        return true;
    }
    return false;
}
