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

