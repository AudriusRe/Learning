const words = ["labas", "ate", "katukas"];
const userGuesses = [];
let remainingGuesses = 6;

const wordsContainer = document.querySelector("#wordsContainer");
const newWordButton = document.querySelector("#newWordButton");
const input = document.querySelector("input");
const guessButton = document.querySelector("#guessButton");
const guessesText = document.querySelector("#guessesText");

function isInputValid(value) {
  //cia tikrinam ar ivestas inputas yra mums priimtinas
  const regex = /^[a-zA-Z]$/; //cia nusirodom kas mum yra tinkama
  return regex.test(value); //susigrazinam BOOLEAN reiksme ar tinkama ar netinkama
}

function revealCorrectlyGuessed(currentGuess) {
  //tikrina dabar ivykusi spejima

  const letterSpans = document.querySelectorAll("span"); //pasiimam visus ssugeneruotus spanus
  let correctlyGuessed = false; //turim kintamaji kuris pasako ar pavko atspeti  raide

  for (let i = 0; i < letterSpans.length; i++) {
    //sukam cikla per visus spanus
    const letter = letterSpans[i].getAttribute("data-letter"); //tirinam ar raide kuria slepia spanas buvo vienas is spejimu

    const isGuessed = currentGuess === letter; // tikrinam ar spejimas yra bent viena is raidziu
    if (isGuessed) {
      //jei riade jau yra tarp spejimu
      letterSpans[i].textContent = letter; //spano contenta pakeiciam ta atspeta raide
      correctlyGuessed = true; //jei atspejo, tai pakeiciam kitamajam reiksme
    }
  }
  if (!correctlyGuessed) {
    //po viso ciklo sukimosi, jei nepavyko atspeti nei vienos raides
    decrementGuesses(); //vykdom funkcija, kuri sumazina spejimu skaiciu vienetu
  }
}

function decrementGuesses() {
  remainingGuesses--; //pamazina vienetuku spejimu kieki
  guessesText.textContent = `Likę spėjimai: ${remainingGuesses}`;
}

function guessButtonHandler() {
  const inputValue = input.value;

  const isValid = isInputValid(inputValue.toLowerCase()); //cekinam ar mums tinkamas inputas
  if (isValid) {
    //jei tinka
    userGuesses.push(inputValue); //prie visu spejimu pridedam ta kuri  katik atliko vartotojas
    revealCorrectlyGuessed(inputValue); //jei atspejama raide, tai atvaizduojam ta raide vietoj bruksnio
    checkIfWon(); //tikrinam ar laimejom
  } else {
    alert("ka cia ivedei? davai kazka normalaus");
  }
}

function checkIfWon() {
  const letterSpans = document.querySelectorAll("span");
  for (let i = 0; i < letterSpans.length; i++) {
    if (letterSpans[i].textContent === "_ ") {
      return false;
    }
  }
  return true;
}

guessButton.addEventListener("click", guessButtonHandler);

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

function generateWordHtml(word) {
  //priima zodi is array, ir ji atvaizduoja
  const letterSpans = []; //naujas array zodzio atvaizdavimui

  for (let i = 0; i < word.length; i++) {
    //sukam cikla
    const letterSpan = document.createElement("span"); //susikuriam spana
    letterSpan.textContent = "_ "; //duodam text contenta
    //letterSpan.id = word[i];
    letterSpan.setAttribute("data-letter", word[i]); //duodam papildoma informacija kiekvienai raidei
    letterSpans.push(letterSpan); //sukurta spana pushinam prie array
  }

  wordsContainer.append(...letterSpans); //pridedam array prie htmlo
}

function generateRandomWord() {
  wordsContainer.innerHTML = ""; //padarom kad kiekviena syki istrintu tai kas buvo sugeneruota viduj, kitaip zodzius des viena po kito
  generateWordHtml(words[getRandomNumber(words.length)]); //cia parenka random zodi is spejamu zodziu array
}

newWordButton.addEventListener("click", generateRandomWord); //kai paspaudziam mygtuka paleidzia nurodyta funkcija

generateRandomWord();
