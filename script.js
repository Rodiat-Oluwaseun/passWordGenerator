// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



function getPasswordOptions() {
  const length = Number(prompt('password   between 8 and 128 characters)'));
  const type = prompt('input one or more data (Lowercase, Uppercase, Numeric or Special)');
  console.log(length,type);
  return {
    length: length,
    type: type?.toLowerCase()
  }
}
// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// Function to generate password with user input
function generatePassword() {
  const footerElement = document.querySelector('.card-footer');
  const options = getPasswordOptions();
  console.log(options);
  let password = '';
  // Remove current errors
  document.querySelectorAll('.error').forEach((element) => element.remove());
  // Validate length
  if (! options.length || options.length < 8 || options.length > 128) {
    footerElement.insertAdjacentHTML(
      'beforebegin',
      `<div class="error">Enter a number between 8 and 128</div>`
    );
    return password;
  }
  
  // Split multiple entries seperated with commas
  const userEntry = options.type.split(',');
  // Validate character types
  if (! options.type || ! userEntry.every(el=> ['lowercase', 'uppercase', 'numeric', 'special'].includes(el.trim()))) {
    footerElement.insertAdjacentHTML(
      'beforebegin',
      `<div class="error">You must enter at least one of the following characters: Lowercase, Uppercase, Numeric or Special. </div>`
    );
    return password;
  }
  const chars = {
    lowercase: lowerCasedCharacters,
    uppercase: upperCasedCharacters,
    numeric: numericCharacters,
    special: specialCharacters
  };
  let charSet = [];
  userEntry.forEach((char) => {
    charSet = charSet.concat(chars[char.trim()]);
  });
    console.log(charSet);
  for (let index = 0; index < options.length; index++) {
    password += getRandom(charSet);
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









