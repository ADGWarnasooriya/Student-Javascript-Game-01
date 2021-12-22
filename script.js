var boyTag = document.createElement("img");
var boxTag = document.getElementById("box");
var scoreTag = document.createElement("h1");

function newGame() {
    var btn = document.getElementById("btn-new-game");
    btn.remove();


    boyTag.src = "boy/Run (1).png";
    boyTag.className = "boy";

    scoreTag.innerHTML = "0";
    boxTag.appendChild(scoreTag);
    scoreTag.className = "score";

    var object = document.createElement("div");
    object.className = "object";
    object.id = "o1";
    boxTag.appendChild(object);


    boxTag.appendChild(boyTag);
    boyRunAnimationNumber = setInterval(boyRunAnimation, 200);
    boyRunAnimationStatus = true;
}

var boyRunImageNumber = 1;
var boyRunAnimationNumber = 0;
var boyRunAnimationStatus = false;

function boyRunAnimation() {
    boyRunImageNumber = boyRunImageNumber + 1;
    boyTag.src = "boy/Run (" + boyRunImageNumber + ").png";

    if (boyRunImageNumber == 8) {
        boyRunImageNumber = 0;
    }

    score = score + 10;
    scoreTag.innerHTML = score;

}

var score = 0;