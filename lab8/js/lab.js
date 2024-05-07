/*
 * Author: Jennifer Le
 * Created: 6 May 
 * License: Public Domain
 */

function analyzeData(x) {
    return (x % 2 == 0);
}

// Test function
console.log("Is 1 even? ", analyzeData(1));
console.log("Is 2 even? ", analyzeData(2));

// Array of numbers
var array = [100, 81, 4, 16, 42, 144, 10000];
console.log("My array", array);

// Test evenness of array elements
var result = array.map(analyzeData);
console.log("Test of evenness of array:", result);

// Calculate square root of array elements
var result = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", result);

var mapResults = "myArray: [100, 81, 4, 16, 42, 144, 10000] <br><br>Evenness of Array: [true, false, true, true, true, true] <br><br> Squareroots of array: [10, 9, 2, 4, 6.480740698407, 12, 100]"
 //Evenness of array: [true,false,true,true,true,true] 
 //Squareroots of array: [10,9,2,4,6.480740698407,12,100]";
$("#output").html(mapResults);
