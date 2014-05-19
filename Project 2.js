//Adam Nelson
//SDI Online
//05/15/2014
//Project 2

//Declaring variables
var game= "World of Warcraft";
var races= 14;
var classes=11;
var loggingIn="Password";
var yourRace= "Human"; 
var yourClass= "Hunter";
var start= 'Let\’s play!';
var hunter= true;

//Output
console.log(" You are playing " + game + ".");
console.log(" There are " + races + " races. ");
console.log(" There are " + classes + " classes. ");
console.log(" You will be using your " + loggingIn + " to authenticate. ");
console.log(" You will be a " + yourRace +  yourClass + ".");
console.log(" Come on " + start + "!"); 

//confirm
hunter = confirm("Are you going to play a hunter?");
//boolean function
function playHunter() {
	if (hunter == true){
		console.log("Great Let's Play!!!");
	}else{
		console.log("Try it over");
	};
};
playHunter();
//for loop
for(var hunter = 5; hunter < 10; hunter = hunter+1) {
          console.log("value of hunter : " + hunter );
          console.log("\n");
      }

//prompt
var races= prompt("How many races do we have?");
//while loop
      while( races < 20 ) {
         console.log("value of races : " + races );
         races++;
         console.log("\n");
      }

//number function
function calcTime() {
    var loggedIn = "180";
    var researchTime= "240";
    var totalTime= loggedIn * researchTime;
	console.log ("You will have been playing " + totalTime + " hours");
}
calcTime();
//or operator
var loggedIn = "180";
var researchTime = "240";
var totalTime = "5";
if ( loggedIn < researchTime || totalTime > 4) {
console.log ( "Then stop to eat");
}else{
console.log ( "Keep gaming" );
}

//confirm
petName = confirm ("Is your pets name Lucy?");
//string function
function havePets() {
   console.log ("Then you have enough pets");
}
havePets();

//and operator
var petBear= 5;
var petCat= 4;
var petWolf= 3;

if (petCat < petWolf && petBear > 10) {
console.log ("Then no more pets");
}else{
console.log ("Get some more pets");
}
 


