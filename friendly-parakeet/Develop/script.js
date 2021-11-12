// Assignment code here






const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChar = "abcdefghijklmnopqrstuvwxyz"
const numChar = "0123456789"
const specChar = "~!@#$%^&*()_+|}{:>?\][<>?,./"

var password = document.getElementById('password')



//passwordText.value = password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperY = "";
var lowerY = "";
var numY = "";
var specY = "";

var charLength = "";
var passChar = "";
const passArray = []
console.log(password)

// Write password to the #password input
function writePassword() {

  //resets password to empty
  passArray.length = 0;
  //charCode = '';
  var charCode = "";

  window.alert("Please select the following variables");
  var charLength = parseInt(prompt("How many characters (8-128)?"));

 //declare length of character string, if true, then set other variables
  if ((charLength >= 8) && (charLength <= 128)) {
    charlength=charLength;
 
 
  console.log(charLength)


      //password variables start
      var upper=confirm("Would you like to include UPPER CASE characters?");
      if(upper==true) {
        upperY = upperChar;
      } else {
        upperY = "";
      }

      var lower=confirm("Would you like to include lower case characters?");
      if(lower==true) {
        lowerY = lowerChar;
      } else {
        lowerY = "";
      }

      var numbers=confirm("Would you like to include numbers?");
      if (numbers==true) {
        numY = numChar;
      } else {
        numY = "";
      }

      var special=confirm("Would you like to include special characters?");
      if(special==true) {
        specY = specChar;
      } else {
        specY = "";
      }
      //password variables end

      //combine password variables into one string
      charCode = charCode.concat(upperY,lowerY,numY,specY);
        
      // test to make sure at least one password variable is selected
      if (charCode.length==0) {
      window.alert("Please select at least one variable to include in the password!")
      writePassword();
      }
      
      //creates password based on combined variables and user supplied character length above 
      function generatePassword() {
      
        for (let i = 0; i < charLength; i++) {
          passChar = charCode[Math.floor(Math.random() * charCode.length)]
          passArray.push(passChar)
        }
        return passArray.join('')
   
      }
      generatePassword();
     
      password.innerText = passArray.join('')
      console.log(passArray.join(''))
      console.log(password)
  
      return passArray['']

    } else {
      window.alert("Please select between 8-128 characters");
      writePassword();
      }

}  



//var password = writePassword();


  //var passwordText = document.querySelector("#password");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

