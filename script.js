// Arrays of characters made into a more readable array
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to get a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to prompt user for password options
function getPasswordOptions() {
    var minLength = 8;
    var maxLength = 128;

    var length = prompt("Enter the length of the password (between " + minLength + " and " + maxLength + "):");

    while (length < minLength || length > maxLength || isNaN(length)) {
        alert("Please enter a valid length between " + minLength + " and " + maxLength + ".");
        length = prompt("Enter the length of the password (between " + minLength + " and " + maxLength + "):");
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("Please select at least one character type.");
        includeLowercase = confirm("Include lowercase characters?");
        includeUppercase = confirm("Include uppercase characters?");
        includeNumeric = confirm("Include numeric characters?");
        includeSpecial = confirm("Include special characters?");
    }

    return {
        length: parseInt(length),
        includeLowercase: includeLowercase,
        includeUppercase: includeUppercase,
        includeNumeric: includeNumeric,
        includeSpecial: includeSpecial
    };
}

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var allCharacters = [];

    if (options.includeLowercase) {
        allCharacters = allCharacters.concat(lowerCasedCharacters);
    }
    if (options.includeUppercase) {
        allCharacters = allCharacters.concat(upperCasedCharacters);
    }
    if (options.includeNumeric) {
        allCharacters = allCharacters.concat(numericCharacters);
    }
    if (options.includeSpecial) {
        allCharacters = allCharacters.concat(specialCharacters);
    }

    var password = "";

    for (var i = 0; i < options.length; i++) {
        var randomChar = getRandom(allCharacters);
        password += randomChar;
    }

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
