// index.js - Arrays & Objects
// Author: Jennifer Le & Revon Hollis
// Date:4/26/24

// Define Variables 
myTransport = ["Honda Fit", "bike", "rides from friends", "lime scooter"]; 
// Functions
myMainRide = {
  make: "Honda",
  model: "Fit", 
  color: "Orange", 
  year: 2007, 
  age: function() {
    return 2024 - this.year;
  }
}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

