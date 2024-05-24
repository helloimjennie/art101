js 
x=121;

function sortingHat(str){
    len = str.length;
    mod = len % 4;
    if(mod == 0) {
      return "snarflepuff";
    } else if (mod == 1){
      return "Glynethpaltrow";
    } else if (mod == 2) {
      return "SltheringSnake";
    } else if (mod == 3) {
      return "Paramour";
    } 
  }
  
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  })