// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz"
var numbers = '123456789'
var symbol = "!@#$%^&*()_+{}][]:?"
var upper = lower.toUpperCase()
var allChar = ''

function generatePassword() {
    var password = ""
    allChar = ""
    var passwordLength = prompt('How many characters would you like your password to be?')
        // console.log(passwordLength);
    while (passwordLength < 8 || passwordLength > 128) {
        alert('Invalid Password')
        var passwordLength = prompt('How many characters would you like your password to be?')
    }
    randomLower()
    randomUpper()
    randomNumber()
    randomSymbol()
    console.log(allChar);

    for (var i = 0; i < passwordLength; i++) {
        password = password + allChar.charAt(Math.floor(Math.random() * allChar.length))
    }
    return password;
}



// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");



    // console.log(Math.floor(Math.random() * String.length))




    // function generatePassword(){
    //   console.log("Clicked...")

    //   return "Password";
    // }

    passwordText.value = password;

}

function randomUpper() {
    var upperConfirm = confirm('Would you like to add upper case characters to your password?')
    if (upperConfirm) {
        allChar = allChar + upper;
    }
}

function randomLower() {
    var lowerConfirm = confirm('Would you like to add lower case characters to your password?')
    if (lowerConfirm) {
        allChar = allChar + lower;
    }
}

function randomNumber() {
    var randomConfirm = confirm('Would you like to add numbers to your password?')
    if (randomConfirm) {
        allChar = allChar + numbers;
    }
}

function randomSymbol() {
    var symbolConfirm = confirm('Would you like to add symbols to your password?')
    if (symbolConfirm) {
        allChar = allChar + symbol;
    }
}
// function randomSpecial(){

// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// confirmClick = writePassword
// addEventListener('click', confirmClick)