// Assignment Code
var generateBtn = document.querySelector("#generate");

// String variables holding every possible character value for each character type
let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialChars = "!@#$%^&*()_}{[]"
let numeric = "0123456789"

// Function that generates a random character from an array or string value
function getRandomCharacter(characterType) {
  return characterType[Math.floor(Math.random() * Math.floor(characterType.length))];
}

// Function that generates a random password based on user input and selection criteria
function generatePassword() {
  // Get desired password length from the user
  let passwordLength = prompt("How many characters would you like your password?");
  // Check to see if the password is too short or too long
  if ((passwordLength < 8)||(passwordLength > 128)){
    alert("Please enter a numeric value between 8-128")
    generatePassword()
  } 
  // Get desired character types to include in the password
  let num = confirm("Would you like to include Numbers?");
  let lCase = confirm("Would you like to include Lower Case Letters?");
  let uCase = confirm("Would you like to include Upper Case Letters?");
  let spChar = confirm("Would you like to include Special Characters?");
  // Check to see if at least one character type was selected
  if ((num === false) && (lCase === false) && (uCase === false) && (spChar === false)){
    alert("Please pick at least on character type");
    generatePassword();
  } else {

    return "here is your password";
  }
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


