// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set default values for password length and included character types
// These values are set durring the lengthInput and typeInput functions
let passwordLength = 0;
let num = false;
let lCase = false;
let uCase = false;
let spChar = false;

// Set a blank array to hold values for the gereratePassword function's switch
// These values are added durring the typeInput function based on user selection
let types = [];

// String variables holding every possible character value for each character type
let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
let numeric = "0123456789"

// Function that generates a random character from an array or string value
function getRandomCharacter(characterType) {
  return characterType[Math.floor(Math.random() * Math.floor(characterType.length))];
}

// Function that collects and validates user input for the length of the password
function lengthInput(){
  // Get desired password length from the user
  passwordLength = prompt("How many characters long would you like your password?");

  // Check to see if the requested password is too short or too long and make sure it is a numeric value
  if ((passwordLength < 8)||(passwordLength > 128)||(isNaN(passwordLength) === true)){
    alert("Please enter a numeric value between 8-128")
    lengthInput()
  } 
}

// Function collects and validates user input for character types to be used durring password generation
function typeInput(){

  // Get user's desired character types to include in the password
  num = confirm("Would you like to include Numbers?");
  lCase = confirm("Would you like to include Lower Case Letters?");
  uCase = confirm("Would you like to include Upper Case Letters?");
  spChar = confirm("Would you like to include Special Characters?");

  // Check to see if at least one character type was selected
  if ((num === false) && (lCase === false) && (uCase === false) && (spChar === false)){
    alert("Please pick at least one character type");
    typeInput()
  }
  // The following if statements insert numbers into the types array. These numbers
  // correspond to switch cases within the generatePassword function that determine 
  // available character types to be chosen durring password generation
  if (num === true){
    types.push(1);
  } 
  if (lCase === true){
    types.push(2);
  }
  if (uCase === true){
    types.push(3);
  }
  if (spChar === true){
    types.push(4);
  }
}

// Function that generates a random password based on user input and selection criteria
function generatePassword() {
  // Variable within the function to hold password characters as they are generated
  let pw = ""

  // Reset the types array before user selection
  types = [];

  // Call functions to recieve and test the user's input
  lengthInput();
  typeInput();

  // For loop that makes sure at least one of each user selected character type is present in the password
  for (var i = 0; i < types.length; i++) {
    switch(types[i]){
      case 1:
        pw = pw + getRandomCharacter(numeric);
        break;
      case 2:
        pw = pw + getRandomCharacter(lowerLetters);
        break;
      case 3:
        pw = pw + getRandomCharacter(upperLetters);
        break;
      case 4:
        pw = pw + getRandomCharacter(specialChars);
        break;
    }
  }
  // For loop that generates a random character based on user type and password length input for the rest of the password
  for (var i = 0; i < (passwordLength - types.length); i++) {

    // switch with case values that are populated randomly by the types array
    switch(types[Math.floor(Math.random() * Math.floor(types.length))]){
      case 1:
        pw = pw + getRandomCharacter(numeric);
        break;
      case 2:
        pw = pw + getRandomCharacter(lowerLetters);
        break;
      case 3:
        pw = pw + getRandomCharacter(upperLetters);
        break;
      case 4:
        pw = pw + getRandomCharacter(specialChars);
        break;
    }
  }
  // Returns the generated password after randomly shuffling the pw string to the writePassword function
  // This last line of code was taken from Joel Mellon on this thread (https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript)
  return pw.split('').sort(function(){return 0.5-Math.random()}).join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


