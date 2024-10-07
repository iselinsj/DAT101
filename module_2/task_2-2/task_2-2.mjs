"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tall = 2 + 3 * (2 - 4) * 6

printOut(tall + "");
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const inch = 2.54;
const centimeters = 100;
const millimeters = 25.34;
const part2 = (centimeters * millimeters) / inch;
const exactNumber = part2.toFixed(2);
printOut(exactNumber.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const hDm = 3 * 24  //hDm = 
const hTm = 12 * 60 
const hDTm = (3 * 24 * 60) + (12 * 60);
const hMm = 14
const hSm = 45 / 60
const hFm = (hDTm + hMm + hSm)

printOut(hFm + "");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60*24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * 24;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * 60;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * 60;
const part4_Seconds = Math.round(part4_Calc);
printOut("Seconds = " + part4_Seconds);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);

printOut(amountUSD + " dollars is " + amountNOK + " kroner");
amountUSD = Math.round(amountNOK * USD);
printOut(amountNOK + " kroner is " + amountUSD + " dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.*/

const text = "There is much between heaven and earth that we do not understand.";
let length = text.length;
printOut(length + "");

const char = text.charAt(19);
printOut(char + "");

const str = text.substr(35, 8);
printOut(str + "");

const index = text.lastIndexOf("earth");
printOut(index + "");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false*/

printOut(" Is 5 greater than 3? " + Boolean(3<5));
printOut(" Is 7 greater than or equal to 7? " + Boolean(7>=7));
printOut(" Is \"a\" greater than \"b\"? " + Boolean("a">"b"));
printOut(" Is 1 less than \"a\"? " + Boolean(1<"a"));
printOut(" Is 2500 less than \"abcd\"? " + Boolean(2500!=="abcd"));
printOut(" \"arne\" is not equal to \"thomas\". " + Boolean("arne"!=="thomas"));
printOut(" (2 equals 5) is this statement true? " + Boolean(2===5));
printOut(" (\"abcd\" is greater than \"bcd\") is this statement false? " + Boolean("abcd"!=="bcd"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number*/

let x = "254";
let y = "57.73";
let z = "25 kroner";

printOut(x.valueOf());
printOut(y.valueOf());
printOut(z.valueOf());
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random()* 361);

printOut(r + "");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use modulus (%) to calculate how many weeks and days are in 131 days.*/

let week = 131/7;
let restDays = 131%7;

printOut("There are " + Math.floor(week) + " weeks and " + restDays + " days, in 131 days");
printOut(newLine);



// 