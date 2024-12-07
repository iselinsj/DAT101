"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
 //TODO: Hent verdier fra input-feltene, prøv å finne ut riktige id'er
 const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
  //TODO: Beregn omkrets og areal
  const perimeter = (height + width + height + width);
  const area = (height * width);
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; Areal: " + area;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");
//TODO: Lage callback-funksjonen txtTask2WordKeyPress
function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  switch(key) {
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");
let text = ""; //Tømmer teksten, gjør klar til ny utskrift.
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++) {
    /*
    TODO: Sjekk om checkboxen er huket av. og skriv ut resultatet i txtTask3Output
          Skriv også ut hvilken checkbox som er huket av, og hva verdien er.
          Det er også mulig å skrivet hele teksten til hver checkbox i txtTask3Output.
    */
   const checkBox = chkTask3[i];
   if(checkBox.checked){
    const value = checkBox.value;
    if(value === "4"){
      text += "Du har valgt nummer " + value + ". Dette kan du ikke mene!!???<br />"
    }else{
      text += "Du har valgt nummer " + value + ".<br />"
    }
   }
  }
  txtTask3Output.innerHTML = text;
  text = ""; //Rømmer teksten, klargjør til neste klikk!
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const divTask4Cars = document.getElementById('divTask4Cars');
const txtTask4Output = document.getElementById('txtTask4Output');

for (let i = 0; i < CarTypes.length; i++) {
 
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'carType'; 
    radioButton.value = CarTypes[i].caption;
    radioButton.id = `carType_${CarTypes[i].value}`; 

    const label = document.createElement('label');
    label.htmlFor = radioButton.id;
    label.textContent = CarTypes[i].caption;

    divTask4Cars.appendChild(radioButton);
    divTask4Cars.appendChild(label);
    divTask4Cars.appendChild(document.createElement('br')); 
}

divTask4Cars.addEventListener('change', (event) => {
    if (event.target.name === 'carType') {
        txtTask4Output.textContent = `Selected car: ${event.target.value}`;
    }
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask5Animals = document.getElementById('selectTask5Animals');
const txtTask5Output = document.getElementById('txtTask5Output');

selectTask5Animals.addEventListener('change', (event) => {
    txtTask5Output.textContent = `Selected animal: ${event.target.value}`;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6Girls = document.getElementById('selectTask6Girls');
const txtTask6Output = document.getElementById('txtTask6Output');

for (let i = 0; i < GirlsNames.length; i++) {
    const option = document.createElement('option');
    option.value = GirlsNames[i];
    option.textContent = GirlsNames[i];
    selectTask6Girls.appendChild(option);
}
selectTask6Girls.addEventListener('change', (event) => {
    txtTask6Output.textContent = `Selected name: ${event.target.value}`;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectMovieGenre = document.getElementById('selectMovieGenre');
const cmbAddMovie = document.getElementById('cmbAddMovie');
const movieTable = document.getElementById('movieTable');


const filmtittel = document.getElementById('filmtittel');
const filmregissor = document.getElementById('filmregissor');
const filmrate = document.getElementById('filmrate');

for (let i = 0; i < MovieGenre.length; i++) {
    const option = document.createElement('option');
    option.value = MovieGenre[i];
    option.textContent = MovieGenre[i];
    selectMovieGenre.appendChild(option);
}

cmbAddMovie.addEventListener('click', () => {
    
    const title = filmtittel.value;
    const genre = selectMovieGenre.value;
    const director = filmregissor.value;
    const rating = filmrate.value;

    const newRow = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    const genreCell = document.createElement('td');
    genreCell.textContent = genre;
    const directorCell = document.createElement('td');
    directorCell.textContent = director;
    const ratingCell = document.createElement('td');
    ratingCell.textContent = rating;

    newRow.appendChild(titleCell);
    newRow.appendChild(genreCell);
    newRow.appendChild(directorCell);
    newRow.appendChild(ratingCell);

    movieTable.appendChild(newRow);

    filmtittel.value = '';
    filmregissor.value = '';
    filmrate.value = '';
});