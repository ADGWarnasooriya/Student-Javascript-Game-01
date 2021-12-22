function newGame() {
    var btn = document.getElementById("btn-new-game");
    btn.remove();

    var boy = document.createElement("img");
    boy.src = "boy/Run (1).png";
    boy.className = "boy";

    var box = document.getElementById("box");
    box.appendChild(boy);

}