
// Assignment code here
const resultDOM = document.getElementById('result');

function generatePassword () {  
  var randomPass = "";
  var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:>?'<,./|][~";
  for (var i = 8; i < 20; i++)
  randomPass += charSet.charAt(Math.floor(Math.random() * charSet.length));

  return randomPass;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
