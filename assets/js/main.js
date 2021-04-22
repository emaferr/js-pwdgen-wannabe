// asks the user for his name
var userName = prompt("What is your name?");
console.log();

// asks the user for his surname
var userSurname = prompt("What's your last name?");
console.log();

// asks the user for their favorite color
var userFavoriteColor = prompt("What is your favorite color?");
console.log();

// define variable to be added to the result
var numberAdd = "21";
console.log();

// identify the greeting variable
var greating = "Hello " + userName;
console.log();

// identify the variable result
var passwordGenerate = userName + userSurname + userFavoriteColor + numberAdd;
console.log();

// write the result to the user
document.getElementById("greeting_user").innerHTML = greating.toUpperCase();

document.getElementById("generate_password").innerHTML = "Your generated password is " +  passwordGenerate.bold().toLowerCase();


