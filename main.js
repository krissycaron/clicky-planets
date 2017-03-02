//create a variable for the button 

var getPlanets = document.getElementById("showPlanets");
// console.log(getPlanets); This shows the ability to see the button from html

var planetHolderDiv = document.getElementById("planetHolder");
// console.log(getPLanetHolderDiv);  This prints to the console the div.
var outputClear = document.getElementById("clear");
// var planetBoxes = document.getElementByClassName('planetBox'); something wrong here

var planets = [
    {
        name:"Mercury",
        url: "http://science.jrank.org/kids/article_images/space_p20.jpg"
    },
    {
        name:"Venus",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
    },
    {
        name:"Earth",
        url: "https://semestahidayah.files.wordpress.com/2010/12/1600_1231.jpg"
    },
    {
        name:"Mars",
        url: "http://skywalker.cochise.edu/wellerr/students/mars-ice/project_files/image002.jpg"
    },
    {
        name:"Jupiter",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
    },
    {
        name:"Saturn",
        url: "http://momentcar.com/images/saturn-vue-3.jpg"
    },
    {
        name:"Uranus",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
    },
    {
        name:"Neptune",
        url: "http://www.crystalinks.com/neptune-rings.jpg"
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
		newPlanet+= `<div class="planetName hidden"> ${planets[i].name} </div>`; // as long as you wrap the entire HTML with "tick" marks 
		//this will create a "box" div for each planet object
		newPlanet+= `<img class="planetImage" src="${planets[i].url}">`
		newPlanet+=`</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
}	

function clearOutput() {
 planetHolderDiv.innerHTML = ""; 
}


function showMeTheName(event){
	if(event.target.className === 'planetImage'){ //selecting the specific target
		console.log("event worked", event);
		console.log("unique ID", event.target.parentNode.id);
		console.log("worked", event.target.previousSibling); 
		event.target.previousSibling.classList.remove('hidden'); //burrows through the html tree and finds "hidden" and removes it
	}
}

//extra challenge, 1) get words to go away
// 2) get planets to disappear. 

getPlanets.addEventListener("mouseenter", writeToDom); //hover with mouse to reveal
outputClear.addEventListener("click", clearOutput);
// console.log("planetBoxes", planetBoxes);
// planetBoxes[0].addEventListener("click", showMeTheName); //event listeners start on page load

document.body.addEventListener("click", showMeTheName);

// function button (){
// 	document.getElementById('').innerHTML
// }


// b.addEventListener("click", function(){

// });



