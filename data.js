
/*
var numberBeingEntered = [0];
var lastNumberEntered = [];
var commands = ["+", "-", "*", "/", ".", "-"];
function adjustNumberBeingEntered() {
  var x = document.getElementById("output");

  x.innerHTML = numberBeingEntered.join("");
}
function del() {
	console.log(numberBeingEntered);
  if (
    commands.indexOf(numberBeingEntered[numberBeingEntered.length - 1]) == -1 &&
    numberBeingEntered[numberBeingEntered.length - 1] != 0
  ) {
    var numberBeingDeleted = true;
  }
  numberBeingEntered.pop();
  console.log(numberBeingEntered);
  if (
    commands.indexOf(numberBeingEntered[numberBeingEntered.length - 1]) != -1 &&
    !numberBeingDeleted
  ) {
    numberBeingEntered.pop();
  }
  if (numberBeingEntered[0] == null) {
    numberBeingEntered[0] = 0;
  }
  adjustNumberBeingEntered();
  numberBeingDeleted = false;
}

function addDigit(number) {
  console.log(numberBeingEntered); 
  numberBeingEntered[numberBeingEntered.length - 1] *= 10;
  numberBeingEntered[numberBeingEntered.length - 1] += number;
  console.log(numberBeingEntered); 
  adjustNumberBeingEntered();
}

function makeNewNumberSpace(command) {
  if (numberBeingEntered[numberBeingEntered.length - 1] != 0) {
    // Separate numbers by the command
    numberBeingEntered.push(command);
    adjustNumberBeingEntered();
    numberBeingEntered.push(0);
  } else if (
    command.indexOf(numberBeingEntered[numberBeingEntered.length - 2]) == -1
  ) {
    // For the start of a statement, change 0 to a command and then make the statement
    numberBeingEntered[numberBeingEntered.length - 1] = command;
    adjustNumberBeingEntered();
    numberBeingEntered.push(0);
  }
}

function getAnswer() {
  lastNumberEntered = numberBeingEntered.slice(0);
  var x = document.getElementById("output");
  numberBeingEntered = eval(numberBeingEntered.join(""));
  x.innerHTML = numberBeingEntered;

  var temp = [];
  temp.push(numberBeingEntered);
  numberBeingEntered = temp;
}

function clearAll() {
  numberBeingEntered = [];
  lastNumberEntered = [];
  numberBeingEntered[0] = 0;
  adjustNumberBeingEntered();
}

function clearCurrent() {
  if (lastNumberEntered[0] != null) {
    numberBeingEntered = lastNumberEntered;
  } else {
    clearAll();
  }
  adjustNumberBeingEntered();
}
*/