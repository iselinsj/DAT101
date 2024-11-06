"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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

function calculateNetPrice(aPrice, aTaxGroup){
    let net = NaN;
    let TaxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;

    printOut("taxGroup " + TaxGroup);

    switch(TaxGroup){
        case "NORMAL": 
        vat = 25;
    }
    if(!Number.isNaN(vat)){
    net = (100 * aPrice) / (vat + 100);
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

const netPrice2 = calculateNetPrice(100, "goblins");
if(Number.isNaN(netPrice2)){
    printOut("Uknown VAT group");
}else{
    printOut("netPrice2 = " + netPrice2.toFixed(2));
}

printOut("netPrice1 = " + netPrice1.toFixed());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun(){
    let op = 1;
    let line = 2;
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
    }else{
        ok = true;
        //på en eller annen måte må vi stoppe functions
    } 
    line++;
}while (!ok);

}
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
