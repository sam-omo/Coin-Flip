// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let flipCoinBtn = document.getElementById("btn");
let rollDiceBtn = document.getElementById("dice-btn");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let roll1El = document.getElementById("roll-1");
let roll2El = document.getElementById("roll-2");
let roll3El = document.getElementById("roll-3");
let roll4El = document.getElementById("roll-4");
let roll5El = document.getElementById("roll-5");
let roll6El = document.getElementById("roll-6");

// Count Variables
let rolled1 = 0;
let rolled2 = 0;
let rolled3 = 0;
let rolled4 = 0;
let rolled5 = 0;
let rolled6 = 0;
let numHeads = 0;
let numTails = 0;

// Button Event Listener
flipCoinBtn.addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = `<img src="img/heads.png"/>`;
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = `<img src="img/tails.png"/>`;
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

rollDiceBtn.addEventListener("click", rollDie);

function rollDie() {
  // Generate a Random Number
  let randRoll = Math.floor(Math.random() * (7 - 1) + 1);
  console.log(randRoll);

  // Simulate Dice Roll
  if (randRoll == 1) {
    outputEl.innerHTML = `<img src="img/1.png" width="250px"/>`;
    rolled1++;
    roll1El.innerHTML = rolled1;
  } else if (randRoll == 2) {
    outputEl.innerHTML = `<img src="img/2.png" width="250px"/>`;
    rolled2++;
    roll2El.innerHTML = rolled2;
  } else if (randRoll == 3) {
    outputEl.innerHTML = `<img src="img/3.png" width="250px"/>`;
    rolled3++;
    roll3El.innerHTML = rolled3;
  } else if (randRoll == 4) {
    outputEl.innerHTML = `<img src="img/4.png" width="250px"/>`;
    rolled4++;
    roll4El.innerHTML = rolled4;
  } else if (randRoll == 5) {
    outputEl.innerHTML = `<img src="img/5.png" width="250px"/>`;
    rolled5++;
    roll5El.innerHTML = rolled5;
  } else {
    outputEl.innerHTML = `<img src="img/6.png" width="250px"/>`;
    rolled6++;
    roll6El.innerHTML = rolled6;
  }
}
