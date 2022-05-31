// ----------------------- //
// ------ Javscript ------ //
// ----------------------- //



// Set Arrays


var isLower = [ 'a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var isUpper = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var isNumber = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var isChar = [ '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];


// Array to store user input choices
var userChoice = []


// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  prompt("helllllo PopUP!")

  var addLower = confirm("Would you like to include lowercase");
  if (addLower === true) {
    userChoice.push(...isLower);
  }

  var addUpper = confirm("Would you like to include Uppercase?")
  if (addUpper) {
    userChoice.push(...isUpper);
  }

  var addNumber = confirm("Would you like to include Numbers?")
  if (addNumber) {
    userChoice.push(...isNumber);
  }

  var addChar = confirm("Would you like to include Special Characters?")
  if (addChar) {
    userChoice.push(...isChar);
  }


  console.log("userChoice is: " + userChoice);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// console.log("userChoice is: " + userChoice);

// console.log(isLower);
// console.log(isUpper);
// console.log(isNumber);
// console.log(isChar);

