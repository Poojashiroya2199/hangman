let words = [
  "fireman",
  "hungry",
  "request",
  "arithmetic",
  "jail",
  "concerned",
  "self",
  "offend",
  "pinch",
  "itchy",
  "frightened",
  "love",
  "attach",
  "zipper",
  "quarter",
  "comparison",
  "pushy",
  "billowy",
  "satisfying",
  "rampant",
  "action",
  "cabbage",
  "cloistered",
  "brawny",
  "ethereal",
  "blush",
  "flood",
  "toothsome",
  "jittery",
  "sick",
  "rule",
  "exciting",
  "turkey",
  "cattle",
  "mass",
  "memorise",
  "labored",
  "maid",
  "truculent",
  "wasteful",
  "capricious",
  "quizzical",
  "memory",
  "visit",
  "loose",
  "knowledge",
  "torpid",
  "nifty",
  "employ",
  "adjustment"
];
let word = words[Math.floor(Math.random() * words.length)];
let chances = 5;
//var n = word.length;
let el = document.getElementById("word");
let count = 0;
//let gameover = false;
const startgame = () => {
  for (let i = 0; i < word.length; i++) {
    let letter = document.createElement("div");
    letter.setAttribute("id", i.toString());
    letter.className = "text";
    el.appendChild(letter);
  }
};
startgame();
const gameoverfn = (chances) => {
  if (chances === 4) {
    let el = document.getElementById("chance5");
    el.innerHTML = "";
  }
  if (chances === 3) {
    let el = document.getElementById("chance4");
    el.innerHTML = "";
  }
  if (chances === 2) {
    let el = document.getElementById("chance3");
    el.innerHTML = "";
  }
  if (chances === 1) {
    let el = document.getElementById("chance2");
    el.innerHTML = "";
  }
  if (chances === 0) {
    let el = document.getElementById("chance1");
    el.innerHTML = "";
    setTimeout(() => {
      alert("game over  & the word is " + word);
    }, 100);
    location.reload();
  }
};
gameoverfn();
const cheklives = (present) => {
  if (present === false) {
    chances--;

    console.log(chances);
    gameoverfn(chances);
  }
};
const handlekeyDown = (event) => {
  let keypress = event.key.toLowerCase();
  //console.log(event.key);
  let present = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === keypress) {
      let element = document.getElementById(i.toString());
      element.innerHTML = word[i];
      count++;
      present = true;
      if (count === word.length) {
        setTimeout(() => {
          alert("you guess correct word");
        }, 100);
        break;
      }
    }
  }
  cheklives(present);
};
document.addEventListener("keydown", handlekeyDown);
