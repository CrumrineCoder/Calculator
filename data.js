var empty = "&";
var numberBeingEntered = [empty];
var commands = ["+", "-", "*", "/", ".", "-", "^"]; 
function adjustNumberBeingEntered() {
    var x = document.getElementById("display");
    x.innerHTML = numberBeingEntered.join("");
}
function checkEmpty(){
	if(numberBeingEntered[numberBeingEntered.length-1] == empty){
			numberBeingEntered.pop(); 
	}
}

function addDigit(number) {
	console.log(numberBeingEntered); 
	if(numberBeingEntered[numberBeingEntered.length-1] == empty){
		numberBeingEntered[numberBeingEntered.length-1] = 0; 
	}
    numberBeingEntered[numberBeingEntered.length - 1] *= 10;
    numberBeingEntered[numberBeingEntered.length - 1] += number;
    adjustNumberBeingEntered();
}
function addOperator(command) {
	console.log(numberBeingEntered); 
	if(command == "(" || command == ")"){
	
		checkEmpty(); 
		if(commands.indexOf(numberBeingEntered[numberBeingEntered.length-1] == -1) && command == "("){
			numberBeingEntered.push("*"); 
		}
		
		numberBeingEntered.push(command);
		adjustNumberBeingEntered();
		numberBeingEntered.push(empty);
	}
	// If this is the end of parentheses, it's  ok to make a new operator so long as the empty is removed and then readded
	else if(numberBeingEntered[numberBeingEntered.length-2] == ")"){
		numberBeingEntered.pop(); 
		numberBeingEntered.push(command);
		adjustNumberBeingEntered();
		numberBeingEntered.push(empty);
	}
	// If the most recent digit is 'empty', then don't add another operator
	else if(numberBeingEntered[numberBeingEntered.length-1] != empty){
		numberBeingEntered.push(command);
		adjustNumberBeingEntered();
		numberBeingEntered.push(empty);
	}
}
function addDecimal(){
	var lastOperator; 
	console.log(numberBeingEntered);
	for(var i=numberBeingEntered.length; i--; i<0){
		if(numberBeingEntered[i] == "."){
			lastOperator = ".";
			break; 
		}
		else if(commands.indexOf(numberBeingEntered[i]) != -1){
			lastOperator = "command";
			break;
		}
		console.log(numberBeingEntered[i]); 
	}
	if(lastOperator != "."){
		checkEmpty(); 
		numberBeingEntered.push("."); 
		adjustNumberBeingEntered();
		numberBeingEntered.push(empty); 
		console.log(numberBeingEntered);
	}
}
function changeSigns(){
	if(numberBeingEntered[numberBeingEntered.length-1] == empty){
		numberBeingEntered.pop(); 
		numberBeingEntered.push("-");
		adjustNumberBeingEntered();
		numberBeingEntered.push(empty); 
	}
	else if(commands.indexOf(numberBeingEntered[numberBeingEntered.length-1]) != -1){
		console.log("YOO"); 
	}
	else{
		numberBeingEntered[numberBeingEntered.length-1]*= -1; 
		adjustNumberBeingEntered();
	}
	
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




// This is the functionality for the '=' button
function equate() {
	console.log(numberBeingEntered); 
	checkEmpty(); 
   // lastNumberEntered = numberBeingEntered.slice(0);
    var x = document.getElementById("display");
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