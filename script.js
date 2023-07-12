// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
       
let pilotName = document.querySelector("input[name=pilot]").value;
let copilotName = document.querySelector("input[name=copilot]").value;
let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
let cargoMass = document.querySelector("input[name=cargoMass]").value;

    event.preventDefault();

    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.dinstance;
       let imageUrl = planet.image;
       let moons = planet.moons;

       addDestinationInfo(document, name, diameter, star, distance, imageUrl, moons);
       console.log(planet);
   
    })
   
});