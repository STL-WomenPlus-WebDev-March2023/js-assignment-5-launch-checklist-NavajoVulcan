// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `

}

function validateInput(testInput) {

       if (testInput === 0) {
          return "Empty"

       } else if (isNaN(testInput) === true) {
        return "Not a Number"
       } else if (isNan(testInput) === false) {
        return "Is a Number"
       }
    };


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
let launchStatus = document.getElementById("launchStatus");
let faultyItems = document.getElementById("faultyItems");
//Pilot-----
let pilotStatus = document.getElementById("#pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuel = document.getElementById("fuelStatus");
let cargo = document.getElementById("cargoStatus");

   if (validateInput(pilot) === "Empty" || (validateInput(copilot) === "Empty") || ( validateInput(fuel) === "Empty") || (validateInput(cargo) === "Empty")) {
    alert("All fields are required.");

} else if (validateInput(pilot) === "Is a Number") {
    alert("Invalid Input for Pilot Name");

} else if (validateInput(copilot) === "Is a Number") {
    alert("Invalid Input for Copilot Name");

} else if (validateInput(fuel) === "Not a Number") {
    alert("Invalid Input for Fuel Level");

} else if (validateInput(cargo) === "Not a Number") {
    alert("Invalid Input for Cargo Level");

} else {

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = 'hidden';
};




//Copilot-----

//google "change visibility of element javascript css", "change color of element javascript css"

//Fuel Level-----
//Fuel Level too low < 10,000 liters


//Cargo Level-----
//Cargo Level too high > 10,000

//

if(fuel < 10000 && cargo > 10000) {
    faultyItems.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    h2.innerHTML = "Shuttle Not Ready for Launch";
    h2.style.color = "#C7254E";

    };


if(fuel < 10000 && cargo < 10000) {
faultyItems.style.visibility = "visible";
fuelStatus.innerHTML = "Fuel level too low for launch";
cargoStatus.innerHTML = "Cargo mass low enough for launch";
h2.innerHTML = "Shuttle Not Ready for Launch";
h2.style.color = "#C7254E";

};


if (cargo > 10000 && fuel >= 10000) {
faultyItems.style.visibility = "visible";
fuelStatus.innerHTML = "Fuel level high enough for launch";
cargoStatus.innerHTML = "Cargo mass too heavy for launch";
h2.innerHTML = "Shuttle Not Ready for Launch";
h2.style.color = "#C7254E";

};

if (cargo < 10000 && fuel >= 10000) {
faultyItems.style.visibility = "visible";
h2.innerHTML = "Shuttle is Ready for Launch";
h2.style.color = "#419F6A";
fuelStatus.innerHTML = "Fuel level high enough for launch";
cargoStatus.innerHTML = "Cargo mass low enough for launch";
};
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    
    let i = Math.floor(Math.random() * planets.length);
    return planets[i];

};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
