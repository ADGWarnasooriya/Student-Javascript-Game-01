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

    setInterval(objectAnimation, 100);
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

var objectMarginLeft = 90;

function objectAnimation() {
    objectMarginLeft = objectMarginLeft - 2;
    o1.style.marginLeft = objectMarginLeft + "%";
}

var boyJumpImageNumber = 0;
var boyJumpAnimationStatus = false;

function boyJumpAnimation() {
    boyJumpImageNumber = boyJumpImageNumber + 1;
    boyTag.src = "boy/Jump (" + boyJumpImageNumber + ").png";
}

function keyAnimation(event) {

    var key = event.which;
    if (key == 32) {
        clearInterval(boyRunAnimationNumber);
        boyRunAnimationStatus = false;
        boyJumpAnimationNumber = setInterval(boyJumpAnimation, 200);
        boyJumpAnimationStatus = true;
    }
}