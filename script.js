var boy = document.createElement("img");
var box = document.getElementById("box");

function newGame() {
    var btn = document.getElementById("btn-new-game");
    btn.remove();


    boy.src = "boy/Run (1).png";
    boy.className = "boy";


    box.appendChild(boy);

}

var boyRunImageNumber = 1;