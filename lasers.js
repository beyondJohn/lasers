var firerightlaser = function () {

    //move right laser
    if (!isrightactive) {
        var audio = new Audio('space_laser_shot.mp3');
        audio.play();
        isrightactive = true;
        var rightlaser = document.getElementsByClassName("rightlaser")[0];
        rightlaser.setAttribute("style", "display:block; right:100%; bottom:70px");
        setTimeout(function () {
            rightlaser.removeAttribute("style");
            rightlaser.setAttribute("style", "display:none; right:-12%; bottom:-54px");
        }, 400);
        setTimeout(function () {
            rightlaser.setAttribute("style", "display:block; right:-12%; bottom:-54px");
            isrightactive = false;
        }, 600);
    }



}
var isrightactive = false;

var fireleftlaser = function () {

    //move left laser
    if (!isleftactive) {
        var audio = new Audio('space_laser_shot.mp3');
        audio.play();
        isleftactive = true;
        var leftlaser = document.getElementsByClassName("leftlaser")[0];
        leftlaser.setAttribute("style", "display:block; left:95%; bottom:88px");
        setTimeout(function () {
            leftlaser.removeAttribute("style");
            leftlaser.setAttribute("style", "display:none; left:-22%; bottom:-31px");
        }, 400);
        setTimeout(function () {
            leftlaser.setAttribute("style", "display:block; left:-22%; bottom:-31px");
            isleftactive = false;
        }, 600);
    }



}
var isleftactive = false;