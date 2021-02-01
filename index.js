function moveChara() {
    console.log("test");
}

var leftDist = 0;
var topDist = 0;
var speed = 5;

document.addEventListener('keydown', logKey);

function logKey(e) {
    var sprite = document.getElementById("sprite");

    if (e.code == "ArrowRight") {
        leftDist += speed;
        sprite.style.marginLeft = leftDist + "px";
    } else if (e.code == "ArrowLeft" && leftDist > speed - 1) {
        leftDist -= speed;
        sprite.style.marginLeft = leftDist + "px";
    } else if (e.code == "ArrowUp" && topDist > speed - 1) {
        topDist -= speed;
        sprite.style.marginTop = topDist + "px";
    } else if (e.code == "ArrowDown") {
        topDist += speed;
        sprite.style.marginTop = topDist + "px";
    }
    console.log("I did move of " + speed);
}