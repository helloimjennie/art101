function fizzbuzzBoom(maxNums, factorObj) {
    var outputStr = "";
    for (var num = 1; num <= maxNums; num++) {
        var str = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                str += factorObj[factor];
            }
        }
        if (str !== "") {
            outputStr += num.toString() + " - " + str + "!\n";
        }
    }
    outputToPage(outputStr);
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max);
    if (!max) {
        reportError("You must provide a maximum");
    } else {
        document.getElementById("output").innerHTML = "";
        fizzbuzzBoom(parseInt(max), {3: "Fizz", 5: "Buzz"});
    }
});
