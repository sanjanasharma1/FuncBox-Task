const numbers = new Map([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [12, "XII"],
    [13, "XIII"],
    [14, "XIV"],
    [15, "XV"],
    [16, "XVI"],
    [17, "XVII"],
    [18, "XVIII"],
    [19, "XIX"],
    [20, "XX"],
    [21, "XXI"],
    [22, "XXII"],
    [23, "XXIII"],
    [24, "XXIV"],
    [25, "XXV"]
]);

// document.getElementById("num1").innerHTML = numbers.get(4);
// document.getElementById("num2").innerHTML = numbers.get(4);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var a = getRandomInt(1,26);
var b = getRandomInt(1,26);

document.getElementById("num1").innerHTML = a;
document.getElementById("num2").innerHTML = b;


/* referred to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;  
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
}

optionsArray = [
    [numbers.get(a), numbers.get(b)],
    [numbers.get(getRandomInt(1, 26)), numbers.get(getRandomInt(1, 26))],
    [numbers.get(getRandomInt(1, 26)), numbers.get(getRandomInt(1, 26))],
    [numbers.get(getRandomInt(1, 26)), numbers.get(getRandomInt(1, 26))]
]

shuffle(optionsArray);

document.getElementById("opt1").innerHTML = optionsArray[0];
document.getElementById("opt2").innerHTML = optionsArray[1];
document.getElementById("opt3").innerHTML = optionsArray[2];
document.getElementById("opt4").innerHTML = optionsArray[3];


// var x = document.getElementsByClassName("atext").addEventListener("click", checkAns);

// function checkAns() {
    
// }

const checkAns = function() {
    var y = this.innerHTML;
    var sa = y.split(',');
    var submitted1 = sa[0];
    var submitted2 = sa[1];

    if(submitted1 == numbers.get(a) && submitted2 == numbers.get(b)){
        alert("Right");
    }
    else{
        alert("Wrong");
    }
}

document.getElementById('opt1').onclick = checkAns;
document.getElementById('opt2').onclick = checkAns;
document.getElementById('opt3').onclick = checkAns;
document.getElementById('opt4').onclick = checkAns;