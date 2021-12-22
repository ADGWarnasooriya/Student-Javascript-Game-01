var boy = document.createElement("img");
var box = document.getElementById("box");

function newGame() {
    var btn = document.getElementById("btn-new-game");
    btn.remove();


    boy.src = "boy/Run (1).png";
    boy.className = "boy";


    box.appendChild(boy);
    setInterval(boyRunAnimation, 200)
}

var boyRunImageNumber = 1;

function boyRunAnimation() {
    boyRunImageNumber = boyRunImageNumber + 1;
    boy.src = "boy/Run(" + boyRunImageNumber + ").png"

    if (boyRunImageNumber == 8) {
        boyRunImageNumber = 0;
    }

}