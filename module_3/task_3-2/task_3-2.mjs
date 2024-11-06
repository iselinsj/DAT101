"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

let txtLine1 = "";
let txtLine2 = "";

for(let i = 1, j = 10; i<= 10; i++, j--) {
    txtLine1 += " " + i.toString();
    txtLine2 += " " + j.toString();
}
printOut(newLine + txtLine1 + newLine);
printOut(txtLine2 + newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const answerNumber = 45;
let guessNumber = 0;
while(answerNumber !== guessNumber){
    guessNumber = Math.ceil(Math.random() * 60);

}
printOut("Guess number = " + guessNumber.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while(answerNumber !== guessNumber){
    guessCount++;
    guessNumber = Math.ceil(Math.random() * 1000000);

}
const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut("Antall gjetninger " + guessCount.toString() + " tok " + timeUsed.toString() + " millisekunder ");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let txtPrintValue = "";

for(let testNumber = 2; testNumber < 200; testNumber++){
    let isNotPrime = false;
    let divide = 2;
    while((isNotPrime === false) && (divide <testNumber)){
        isNotPrime = (testNumber % divide) === 0;
        divide++;
    }
    if(isNotPrime === false){
        txtPrintValue += testNumber.toString() + " ";
    }
}
printOut(newLine + txtPrintValue + newLine);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let PrintValue = "";
for(let row = 1; row <= 9; row++){
    for(let col = 1; col <= 7; col++){
        PrintValue += "K" + col.toString() + "R" + row.toString() + "";
    } PrintValue += newLine;
}

printOut(PrintValue);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let txtValue = "";
const gradePoints = Math.floor(Math.random() * 237);
const gradePercent = gradePoints / 236 * 100;
let grade;
if(gradePercent <= 40){
    grade = "F";
} else if (gradePercent <= 52){
    grade = "E";
} else if(gradePercent <= 64){
    grade = "D";
} else if(gradePercent <= 76){
    grade = "C";
} else if(gradePercent <= 88){
    grade = "B";
} else if(gradePercent <= 100){
    grade = "A";
}

txtValue += newLine + "Eleven fikk totalt " + gradePoints.toString() + " poeng. ";
txtValue += newLine + "Dette tilsvarer " + gradePercent.toFixed(0) + " % av antall mulige poeng, og gir derfor eleven karakteren " + grade + ".";
printOut(txtValue);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
txtPrintValue = "";
const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;


let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString() + ",";
printOut("diceCount: " + diceCount);

	 String.prototype.numberOfOccurence = function (aSubstring) {
		 const listStrings = this.split(aSubstring);
		 return listStrings.length - 1;
	 };

	 let fullStraight = false;
	 let threePairs = false;
	 let tower = false;
	 let yatzy = false;
	 let counter = 0;

	 do {
		const d1 = Math.ceil(Math.random() * 6 );
		const d2 = Math.ceil(Math.random() * 6 );
		const d3 = Math.ceil(Math.random() * 6 );
		const d4 = Math.ceil(Math.random() * 6 );
		const d5 = Math.ceil(Math.random() * 6 );
		const d6 = Math.ceil(Math.random() * 6 );
		const diceRoll = d1 + ", " + d2 + ", " + d3 + ", " + d4 + ", " + d5 + ", " + d6; 
		
		const c1 = diceRoll.numberOfOccurence("1");
		const c2 = diceRoll.numberOfOccurence("2");
		const c3 = diceRoll.numberOfOccurence("3");
		const c4 = diceRoll.numberOfOccurence("4");
		const c5 = diceRoll.numberOfOccurence("5");
		const c6 = diceRoll.numberOfOccurence("6");
		const countDice = c1 + ", " + c2 + ", " + c3 + ", " + c4 + ", " + c5 + ", " + c6; 

		const o1 = countDice.numberOfOccurence("1");
		const o2 = countDice.numberOfOccurence("2");
		const o3 = countDice.numberOfOccurence("3");
		const o4 = countDice.numberOfOccurence("4");
		const o5 = countDice.numberOfOccurence("5");
		const o6 = countDice.numberOfOccurence("6");
		const occurenceDice = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6; 

	
	if (!yatzy){
		yatzy = (o6 === 1)
		if (yatzy) {
		txtPrintValue += diceRoll + newLine;
		txtPrintValue += "Yatzy!" + newLine;
		txtPrintValue += " Det tok " + counter + " forsøk.";
		}

	}
	 if(!fullStraight) {
		fullStraight = (o1 === 6);
		if (fullStraight) {
			txtPrintValue += diceRoll + newLine;
			txtPrintValue += "Full straight!" + newLine;
			txtPrintValue += "Det tok " + counter + " forsøk." + newLine + newLine;
		}
	} if(!threePairs) {
		threePairs = (o2 === 3);
		if (threePairs) {
			txtPrintValue += diceRoll + newLine;
			txtPrintValue += "Tre par!" + newLine;
			txtPrintValue += "Det tok " + counter + " forsøk." + newLine + newLine;
		}
	} if(!tower) {
		tower = (o2 === 1 && o4 === 1);
		if (tower) {
			txtPrintValue += diceRoll + newLine;
			txtPrintValue += "Tårn!" + newLine;
			txtPrintValue += "Det tok " + counter + " forsøk." + newLine + newLine;
		}
	}
	
	counter++;
	}

	while (yatzy === false) {
		printOut(newLine + txtPrintValue + newLine)}

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
