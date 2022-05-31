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


// password length validator function
function validateCharLength (numberOfChars) {
  if (numberOfChars < 8 || numberOfChars > 128) {
    alert("Please pick a number between 8 and 128");
    return generatePassword()
  }
  return numberOfChars
}



function generatePassword() {
  var numberOfChars = prompt("Hello, please choose the length of your password (8-128)");
  validateCharLength(numberOfChars);

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

  else {
    alert("--Please pick at least one option!--");
    return generatePassword();
  }

  console.log("userChoice is: " + userChoice);


  userPassword = ""

  // user Password Logic

  for (var i = 0; i < numberOfChars; i++) {

    var randomPick = userChoice[Math.floor(Math.random() * userChoice.length)];

    console.log("randomPick is:" + randomPick);

    userPassword = userPassword.concat(randomPick);

  }

  password = userPassword

  return password;
  
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

