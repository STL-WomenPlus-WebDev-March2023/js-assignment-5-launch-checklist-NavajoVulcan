// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

       if (testInput === "") {
          return "Empty"

       } else if (isNaN(testInput) === true) {
        return "Not a Number"
       } else if (isNan(testInput) === false) {
        return "Is a Number"
       }
    };


function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {
//Pilot-----
   if (validateInput(pilotName) != "Empty") {
    let pilotStatus = document.querySelector("#pilotStatus");
    pilotStatus.innerHTML = `${pilotName} Ready`
   }

   if(validateInput(pilotName) = "Empty") {
    alert("All fields are required.");
   }

   if (validateInput(pilot) === "Is a Number") {
    alert ("Invalid Input for Pilot Name");
};

//Copilot-----
   if (validateInput(copilotNamepilot) != "Empty") {
    let pilotStatus = document.querySelector("#pilotStatus");
    pilotStatus.innerHTML = `${pilotName} Ready`
   }
 
   if(validateInput(copilotName) = "Empty" {
    alert("All fields are required.");
   }

   if (validateInput(copilotName) === "Is a Number") {
    alert ("Invalid Input for Pilot Name");
   }
};

//Fuel Level
   
   validateInput(fuelLevel);
   //google google "change visibility of element javascript css", "change color of element javascript css"
   validateInput(cargoLevel);
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
