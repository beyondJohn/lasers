var firelaser = function () {

    //move right laser
    if (!isactive) {
        isactive = true;
        var rightlaser = document.getElementsByClassName("rightlaser")[0];
        rightlaser.setAttribute("style", "display:block; right:100%; bottom:70px");
        setTimeout(function () {
            rightlaser.removeAttribute("style");
            rightlaser.setAttribute("style", "display:none; right:-12%; bottom:-54px");
        }, 400);
        setTimeout(function () {
            rightlaser.setAttribute("style", "display:block; right:-12%; bottom:-54px");
            isactive = false;
        }, 600);
    }



}
var isactive = false;