// Assignment code here

//character types. Initially set to be inactive
var upperCase = false;
var lowerCase = false;
var numeric = false;
var specialCharacters = false;
//TO collect user password length data
var charLength = 0;

//character check
var input = false;

var validateInput = function(value){

  //Just to collect the return value
  var Input_check = 0;

  //Loops until the user input a valid value
  while(Input_check == 0){

    //Convert String to Integer
    value = parseInt(value);

    //if(value < 8 || value > 128)
    if(value < 8 || value > 128){
      charLength = prompt("Please enter a VALID numeric length between 8 and 128 characters for the password length.");   
      value = parseInt(charLength);   
    }    
    else{
      Input_check = value;       
    }
  }

  return Input_check;
}


var generatePassword = function (){

  /*Get user input*/
  upperCase = confirm("Does your password require 'Uppercase' characters?(ABCDEF...etc)"); 
  lowerCase = confirm("Does your password require 'Lowercase' characters?(abcdef...etc)"); 
  numeric = confirm("Does your password require 'Numeric' characters?(01234....etc"); 
  specialCharacters = confirm("Does your password require 'Uppercase' characters?(!\'#$%&'()...etc)"); 
  /*Note: The idea to use 'confirm' (other than prompt) was based off of Eric Normann's posted solution on slack. But no code was copied from it.*/

  //User input for the password length
  charLength = prompt("Please enter between 8 and 128 characters for the password length below.");  
  
  //Check password length user input
  charLength = validateInput(charLength); 
}

/*Generate a single character*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //To collect the final string of possible characters from user inputs
  var finalCharList = "";
  //To get the password output from the possible char user selected
  var output = "";

  //Get user inputs;
  var password = generatePassword();
  
  //Each selected each char type is added to the finalCharList
  if (upperCase){
    finalCharList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowerCase){
    finalCharList += "abcdefghijklmnopqrstuvwxyz";
  }
  if(numeric){
    finalCharList += "0123456789";
  }
  if(specialCharacters){
    finalCharList += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  //Add characters to the string according to password lenght user selected 
  for(var i=0; i<charLength; i++){
    // select characters from the concatinated list of possibilities the user choose from
    output += finalCharList.charAt(Math.floor(Math.random() * finalCharList.length));  
  }

  //Copied here so it's possible to be displayed on page
  password = output;

  //Display on page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
