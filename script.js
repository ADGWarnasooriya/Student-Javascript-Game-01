var boyTag = document.createElement("img");
var box = document.getElementById("box");

function newGame() {
    var btn = document.getElementById("btn-new-game");
    btn.remove();


    boy.src = "boy/Run (1).png";
    boy.className = "boy";


    box.appendChild(boy);
    boyRunAnimationNumber = setInterval(boyRunAnimation, 200);
    boyRunAnimationStatus = true;
}

var boyRunImageNumber = 1;
var boyRunAnimationNumber = 0;
var boyRunAnimationStatus = false;

function boyRunAnimation() {
    boyRunImageNumber = boyRunImageNumber + 1;
    boy.src = "boy/Run (" + boyRunImageNumber + ").png";

    if (boyRunImageNumber == 8) {
        boyRunImageNumber = 0;
    }

}