// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialChar = "!@#$%^&*()_}{[]"

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function getRandomItem(type) {
let max = type.length;
return type[Math.floor(Math.random() * Math.floor(max))];
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomInt(10));
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomItem(lowerLetters));
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomItem(upperLetters));
}

for ( let i = 0; i < 10; i++) {
  console.log(getRandomItem(specialChar));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


