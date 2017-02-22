//create a variable for the button 

var getPlanets = document.getElementById("showPlanets");
// console.log(getPlanets); This shows the ability to see the button from html

var planetHolderDiv = document.getElementById("planetHolder");
// console.log(getPLanetHolderDiv);  This prints to the console the div.

var planets = [
    {
        name:"Mercury",
        url: ""
    },
    {
        name:"Venus",
        url: ""
    },
    {
        name:"Earth",
        url: ""
    },
    {
        name:"Mars",
        url: ""
    },
    {
        name:"Jupiter",
        url: ""
    },
    {
        name:"Saturn",
        url: ""
    },
    {
        name:"Uranus",
        url: ""
    },
    {
        name:"Neptune",
        url: ""
    }
];
//array of objects not strings. this is an array for 8 objects, 



// var planets = ["mercury", "mars", "earth", "saturn", "venus", "jupiter", "uranus", "neptune"] // array of stings but we need and array of objects


function writeToDom (){
	planetHolderDiv.innerHTML = ""; // function that writes to the dom // also the ""; are a "wipe clean" so that no more divs are created

	for (i=0; i < planets.length; i++){ 

		// planetHolderDiv.innerHTML += planets[i] + "<br>"; //must have plus and then equals to capture all the planets and then add the space.
		// planetHolderDiv.innerHTML += '<div class= "planetName">' + planets[i] + '</div>'; This works too

		//with the <div> tags this "for loop" now creates a new div with each object ?



		//String Templeting "ticking"
		var newPlanet = "";
		newPlanet+= `<div class="planetbox", id="planetbox-${i}">` // i is a variable so it needs to be wrapped in {}
		newPlanet += `<div class="planetName"> ${planets[i].name} </div>`; // as long as you wrap the entire HTML with "tick" marks 
		//this will create a "box" div for each planet object
		newPlanet+=`</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
}	


getPlanets.addEventListener("click", writeToDom);

// function button (){
// 	document.getElementById('').innerHTML
// }


// b.addEventListener("click", function(){

// });



