$(document).ready(function() {
    // Event listener for the button click
    $("#button").click(function() {
        var name = $("#input").val().trim();
        if (name === "") {
            alert("Please enter a name.");
            return;
        }

        // Sorting hat function
        function sortingHat(str) {
            var len = str.length;
            var mod = len % 4;
            if (mod === 0) {
                return "Snarflepuff";
            } else if (mod === 1) {
                return "Glynethpaltrow";
            } else if (mod === 2) {
                return "SlytheringSnake";
            } else if (mod === 3) {
                return "Paramour";
            }
        }

        var house = sortingHat(name);
        var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
        $("#output").html(newText);
    });
});