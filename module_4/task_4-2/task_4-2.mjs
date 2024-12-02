"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text = "";
for(let index = 0; index < numbers.length; index++){
    text += numbers[index] + " ";
}
printOut(text);
printOut(" ");

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(numbers.join(", "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const greating = "Hei på deg, hvordan har du det?";
const myArray = greating.split(" ");
for(let i = 0; i < myArray.length; i++){
    printOut(i + " " + " " + (i+1) + " " + myArray[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", 
    "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

    function removeElement(Array, nameToRemove){
        const array = Array.indexOf(nameToRemove);
        if(array !== -1){
            Array.splice(array, 1);
            return `'${nameToRemove}' has been removed from the Array.`;
        }else{
            return `'${nameToRemove}' was not found in the Array.`;
        }
    }

printOut(removeElement(girls, "Marit"));
printOut(girls.join(", "));

printOut(" ");

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", 
    "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

const allName = [...boys, ...girls];

allName.forEach(allName => printOut(allName));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    #title;
    #author;
    #isbn;
    constructor(title, author, isbn) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
    }

    toString() {
        return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
    }
}

const books = [
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new TBook("1984", "George Orwell", "9780451524935")
];


for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

const keys = Object.keys(EWeekDays);
keys.forEach(key => {
    const { value, name } = EWeekDays[key];
    printOut(`${key}: Value = ${value}, Name = ${name}`);
})

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomNumbers = Array.from({length: 35}, () => Math.floor(Math.random()* 21)+ 1);
const ascending = [...randomNumbers].sort((a, b) => a - b);
const descending = [...randomNumbers].sort((a, b) => b - a);

printOut("Original Array: ", randomNumbers);
printOut("Ascending order: ", ascending);
printOut("Descending order: ", descending);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const frequency = {};
randomNumbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});
const freqArray = Object.entries(frequency);
freqArray.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

printOut("Number Frequencies:");
freqArray.forEach(([num, count]) => {
    printOut(`Number ${num} occurs ${count} times`);
});

const groupedByFrequency = {};
freqArray.forEach(([num, count]) => {
    if (!groupedByFrequency[count]) {
        groupedByFrequency[count] = [];
    }
    groupedByFrequency[count].push(num);
});

printOut("Frequencies and Numbers:");
Object.entries(groupedByFrequency).sort((a, b) => b[0] - a[0]).forEach(([freq, nums]) => {
    printOut(`Frequency ${freq}: Numbers ${nums.sort((a, b) => a - b).join(", ")}`);
});

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const grid = [];
const rows = 5;
const cols = 9;

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(`Row ${i + 1}, Col ${j + 1}`);
    }
    grid.push(row);
}

printOut("2D Array:");
grid.forEach(row => {
    printOut(row.join(" | "));
});

printOut(newLine);
