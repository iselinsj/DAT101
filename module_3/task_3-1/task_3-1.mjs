"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

let wakeUpTime = 8;

if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");

}else if(wakeUpTime == 8){
  printOut("i can take the train");

  }else{
  printOut("i take the car to school");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let integer = 3;
printOut("Value = " + integer.toString());
if(integer<0){
  printOut("Value is Negativ");
} else if(integer==0){
  printOut("Value is Zero");
} else {
  printOut("Value is Positive ");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imageMinSize = 4;
const imageSize = Math.ceil(Math.random() * 8);
printOut("The image size is: " + imageSize + "MP.");
if(imageSize >= imageMinSize) {
  printOut("Thank you");
}else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Submitted File Size: " + imageSize.toString());
if (imageSize >=6) {
  printOut("Image is too large");
} else if (imageSize >=4) {
printOut("Thank you")
} else {
  printOut("The image is too small")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];

  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  printOut("Month Is = " + monthName);

  if (monthName.includes("r")) {
printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let daysOfMonth = null;
switch (monthName) {
  case "January":
  case "Mai":
  case "Mars":
  case "Juli":
  case "August":
  case "October":
  case "December":
    daysOfMonth = 31;
break;
  case "April":
  case "Jun":
  case "September":
  case "November":
   daysOfMonth = 30;
  break;
  default:
    "February"

    daysOfMonth = 28;
}
printOut("There is " + daysOfMonth  + " Days In  " + monthName);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthlist = ["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];

  const noofMonth = monthlist.length;
  const monthname = monthlist[Math.floor(Math.random() * noofMonth)];

  if (monthName.includes("r")) {
printOut("Gallery is not open in " + monthname);
  } else {
    printOut("Gallery is open in " + monthname + " , welcome!");
  }
  

printOut(newLine);
