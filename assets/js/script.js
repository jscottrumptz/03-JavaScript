// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set default values for password length and included character types
let passwordLength = 0;
let num = false;
let lCase = false;
let uCase = false;
let spChar = false;

// String variables holding every possible character value for each character type
let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialChars =  "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
let numeric = "0123456789"

// Function that generates a random character from an array or string value
function getRandomCharacter(characterType) {
  return characterType[Math.floor(Math.random() * Math.floor(characterType.length))];
}

function lengthInputTest(){
  // Get desired password length from the user
  passwordLength = prompt("How many characters would you like your password?");
  // Check to see if the password is too short or too long
  if ((passwordLength < 8)||(passwordLength > 128)){
    alert("Please enter a numeric value between 8-128")
    lengthInputTest()
  } 
}

function typeInputTest(){
  // Get desired character types to include in the password
  num = confirm("Would you like to include Numbers?");
  lCase = confirm("Would you like to include Lower Case Letters?");
  uCase = confirm("Would you like to include Upper Case Letters?");
  spChar = confirm("Would you like to include Special Characters?");
  // Check to see if at least one character type was selected
  if ((num === false) && (lCase === false) && (uCase === false) && (spChar === false)){
    alert("Please pick at least on character type");
    typeInputTest()
  }
}

// Function that generates a random password based on user input and selection criteria
function generatePassword() {
  return "Generated Password"
}

// BEGIN Testing getRandomCharacter function to console
for ( let i = 0; i < 10; i++) {
  console.log(getRandomCharacter(numeric));
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomCharacter(lowerLetters));
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomCharacter(upperLetters));
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomCharacter(specialChars));
}
// END Testing getRandomCharacter function to console

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


