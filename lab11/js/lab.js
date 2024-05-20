// index.js - Events & Forms 
// Author: Jennifer Le & Revon Hollis
// Date: 05/18/2024

//Sorts the characters of a string in alphabetical order. 
function sortString(InputString) {
    //We have to convert our string to an array and back again to sort it
    return InputString.split('').sort().join('');
}

// click listener for button 
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
} )

//Task X 
function anagram(inputString){
    const charArray = inputString.split('')
    // Fisher-Yates (Knuth) shuffle algorithm tuat shuffles characters 
    for (let i = charArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        charArray[i], charArray[j] = [charArray[j], charArray[i]];
    }
    const anagram = charArray.join('');
    return anagram; 
}



$("#anagram").click(function(){
    const userName = $("#user-name").val();
    const ColorName = $("#age").val();
    const aniName = $("#color").val(); 
    userNameSorted = anagram(userName);
    colorNameSorted = anagram(ColorName);
    aniNameSorted = anagram(aniName); 

$("#output").append('<p>' + userNameSorted + '</p>');
$("#output").append('<p>' + colorNameSorted + '</p>');
$("#output").append('<p>' + aniNameSorted + '</p>'); 
});