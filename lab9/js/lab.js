/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Jennifer Le
   Date: 2024
*/
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>This is so hard</button>");


// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
$("#problems").append("<button id='button-challenge'>Solve me</button>");


// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});
$("#reflection").append("<button id='button-challenge'>Read Me</button>");


// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});
$("#results").append("<button id='button-challenge'>Peeeriod</button>");


// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});