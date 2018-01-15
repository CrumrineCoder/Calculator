// Initial Value
var empty = "0";
// The numbers being displayed. 
var numberBeingEntered = [empty];
var commands = ["+", "-", "*", "/", ".", "-", "**"];
// The Update Function essentially. It updates the numbers on the display.
function adjustNumberBeingEntered() {
    // The numbers on the calculator area
    var x = document.getElementById("display");
    // Display the numbers on the calculator. Since numberBeingEntered is an array, it has to be joined.
    x.innerHTML = numberBeingEntered.join("");
}

// If the last thing in the calculator is a "0", then it is removed. This is used in addDecimal for changing the 0 to a . changeSigns from 0 to a -. Delete button straight up deletes the latest thing so this is also needed. 
function checkEmpty() {
    if (numberBeingEntered[numberBeingEntered.length - 1] == empty) {
        numberBeingEntered.pop();
    }
}
// Display the initial value to the calculator display
adjustNumberBeingEntered();
// The number buttons, eg. 1, 2 and 7
function addDigit(number) {
    // Because the initial value is saved as a string, we check if the number is equal to the string of "0". If so, we change it to 0.
    if (numberBeingEntered[numberBeingEntered.length - 1] == empty) {
        numberBeingEntered[numberBeingEntered.length - 1] = 0;
    }
    // So if the number is 6 and thus  not equal to 0, we make it 60. Then we can add or remove from it and it looks like we've added the number.  
    numberBeingEntered[numberBeingEntered.length - 1] *= 10;
    // If the number is positive.
    if (numberBeingEntered[numberBeingEntered.length - 1] >= 0) {
        // Add to the number. 
        numberBeingEntered[numberBeingEntered.length - 1] += number;
    }
    // If the number is negative. 
    else {
        // Reduce the number. 
        numberBeingEntered[numberBeingEntered.length - 1] -= number;
    }
    // Update the display
    adjustNumberBeingEntered();
}
// +, -, /, *, ** buttons
function addOperator(command) {
    // If the most recent digit is 'empty', then don't add another operator
    if (numberBeingEntered[numberBeingEntered.length - 1] != empty) {
		// So if the recent number is 60, then the array becomes ["60", "+"]
        numberBeingEntered.push(command);
		// Display the change
        adjustNumberBeingEntered();
		// So now it becomes ["60", "+", "0"] and thus can be added to. 
        numberBeingEntered.push(empty);
    }
}
// . button
function addDecimal() {
    var lastOperator;
	// Iterate through the display from the back. This determines if the last operator used was a command or a '.'. If it finds a command before  it does a '.', then we're good to go. If not, then the function effectively stops here. 
    for (var i = numberBeingEntered.length; i--; i < 0) {
        if (numberBeingEntered[i] == ".") {
            lastOperator = ".";
            break;
        } else if (commands.indexOf(numberBeingEntered[i]) != -1) {
            lastOperator = "command";
            break;
        }
    }
	// If the last used thing was not a '.'
    if (lastOperator != ".") {
		// If the last entry is a "0", then it becomes a .
        checkEmpty();
        numberBeingEntered.push(".");
		// Display the change
        adjustNumberBeingEntered();
		// The last thing is once again a "0"
        numberBeingEntered.push(empty);
    }
}
// +/- button
function changeSigns() {
	// Reverse the latest number. So 80 becomes -80 and vice versa. Only do this if the second to latest thing is not an operator OR  the current number is not 0.  
	if(commands.indexOf(numberBeingEntered[numberBeingEntered.length - 2]) == -1 || numberBeingEntered[numberBeingEntered.length - 1] != empty){
	 numberBeingEntered[numberBeingEntered.length - 1] *= -1;
     adjustNumberBeingEntered();
	}
}
// DEL button
function deleteOne() {
	// Delete the latest entry to get rid of the 0. 
    checkEmpty();
	// If the new latest entry is 0, delete it. 
    if (numberBeingEntered[numberBeingEntered.length - 1] == empty || numberBeingEntered[numberBeingEntered.length - 1] == 0) {
        numberBeingEntered.pop();
    }
	// If the new latest entry is a command, delete it. 
    if (commands.indexOf(numberBeingEntered[numberBeingEntered.length - 1]) != -1) {
        numberBeingEntered.pop();
    } else {
		// If the new latest entry is not a command, then check if it's above 10.
        if (Math.abs(numberBeingEntered[numberBeingEntered.length - 1]) > 10) {
			// If so, divide it by 10 as though we were removing the latest number.
            numberBeingEntered[numberBeingEntered.length - 1] = Math.trunc(numberBeingEntered[numberBeingEntered.length - 1] / 10);
        } else {
			// If it's not higher than 10, we can just delete it. 
            numberBeingEntered[numberBeingEntered.length - 1] = 0;
        }
    }
	// If the entire display is removed, add a "0" to the end. 
    if (numberBeingEntered.length == 0) {
        numberBeingEntered[0] = 0;
    }
	// Display the changes. 
    adjustNumberBeingEntered();
}
// = button
function equate() {
    // If the latest entry is not 0 and the second to last isn't an operator, then equat. eg. would not work: ["6", "+", "0"]
    if (commands.indexOf(numberBeingEntered[numberBeingEntered.length - 2]) != -1 && numberBeingEntered[numberBeingEntered.length - 1] != empty) {
		// If the latest number IS empty, then remove it. Even though it can't be, best to do this anyways. 
        checkEmpty();
		// Evaluate
        var x = document.getElementById("display");
        numberBeingEntered = eval(numberBeingEntered.join(""));
        x.innerHTML = numberBeingEntered;
		// Reset, so ["6", "+", "3"] becomes a 9. Temp becomes [9], and then it is copied to numberBeingEntered so it can be an array again. 
        var temp = [];
        temp.push(numberBeingEntered);
        numberBeingEntered = temp;
    }
}
// CE button
function clearAll() {
	// Resets everything. 
    numberBeingEntered = [];
    numberBeingEntered[0] = 0;
    adjustNumberBeingEntered();
}