var empty = "&";
var numberBeingEntered = [empty];
var commands = ["+", "-", "*", "/", ".", "-"];
function adjustNumberBeingEntered() {
    var x = document.getElementById("display");
    x.innerHTML = numberBeingEntered.join("");
}
function addDigit(number) {
	console.log(numberBeingEntered); 
	if(numberBeingEntered[numberBeingEntered.length-1] == empty){
		numberBeingEntered[numberBeingEntered.length-1] = 0; 
	}
	console.log(numberBeingEntered); 
    numberBeingEntered[numberBeingEntered.length - 1] *= 10;
	console.log(numberBeingEntered); 
    numberBeingEntered[numberBeingEntered.length - 1] += number;
	console.log(numberBeingEntered); 
    adjustNumberBeingEntered();
}



function del() {
    console.log(numberBeingEntered);
    if (commands.indexOf(numberBeingEntered[numberBeingEntered.length - 1]) == -1 && numberBeingEntered[numberBeingEntered.length - 1] != 0) {
        var numberBeingDeleted = true;
    }
    numberBeingEntered.pop();
    console.log(numberBeingEntered);
    if (commands.indexOf(numberBeingEntered[numberBeingEntered.length - 1]) != -1 && !numberBeingDeleted) {
        numberBeingEntered.pop();
    }
    if (numberBeingEntered[0] == null) {
        numberBeingEntered[0] = 0;
    }
    adjustNumberBeingEntered();
    numberBeingDeleted = false;
}


function addOperator(command) {
		
		numberBeingEntered.push(command);
        adjustNumberBeingEntered();
        numberBeingEntered.push(empty);
	
}

// This is the functionality for the '=' button
function equate() {
   // lastNumberEntered = numberBeingEntered.slice(0);
    var x = document.getElementById("output");
    numberBeingEntered = eval(numberBeingEntered.join(""));
    x.innerHTML = numberBeingEntered;
    var temp = [];
    temp.push(numberBeingEntered);
    numberBeingEntered = temp;
} 
function clearAll() {
    numberBeingEntered = [];
//    lastNumberEntered = [];
    numberBeingEntered[0] = 0;
    adjustNumberBeingEntered();
}
/*
function clearCurrent() {
  if (lastNumberEntered[0] != null) {
    numberBeingEntered = lastNumberEntered;
  } else {
    clearAll();
  }
  adjustNumberBeingEntered();
}
*/