var asteroidx; 
var asteroidy;
var leftlaserx;
var leftlasery;
const asteroid = document.getElementsByClassName("ball-animation")[0];
const leftlaser = document.getElementsByClassName("leftcontainer")[0];
(function () {
    function trackdiv() {

        
        setInterval(() => {
            asteroidx = getPos(asteroid).x; 
            asteroidy = getPos(asteroid).y;
            leftlaserx = getPos(leftlaser).x;
            leftlasery = getPos(leftlaser).y;
            if(leftlaserx <= asteroidx + 50 
                &&  leftlaserx >= asteroidx - 50){
                    if(leftlasery <= asteroidy + 50 
                        && leftlasery >= asteroidy - 50){
                            //console.log("getPos(asteroid).x",getPos(asteroid).x );
                            //console.log("getPos(asteroid).y",getPos(asteroid).y );
                            //console.log("getPos(leftlaser).x",getPos(leftlaser).x + ", getPos(leftlaser).y", + getPos(leftlaser).y);
                            //console.log("Direct hit!!!");
                        }
                    
                }
        }, 50)


    }
    trackdiv();

})()
function getPos(el) {
    // yay readability
    for (var lx = 0, ly = 0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
}
var firerightlaser = function () {

    //move right laser
    if (!isrightactive) {
        //var audio = new Audio('space_laser_shot.mp3');
        //audio.play();
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
   //setTimeout(()=>{
        //console.log("getPos(asteroid).x",getPos(asteroid).x );
        console.log("getPos(asteroid).y",getPos(asteroid).y );
        //console.log("getPos(leftlaser).x",getPos(leftlaser).x + ", getPos(leftlaser).y", + getPos(leftlaser).y);
    //},0)

    //move left laser
    if (!isleftactive) {
        //var audio = new Audio('space_laser_shot.mp3');
        //audio.play();
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
        var position = getPos(asteroid).y;
        if( position > 108 && position < 115 ){
            console.log("Direct HIt!!!");
            setTimeout(()=>{
                leftlaser.style.display = 'none';
            },175)
            setTimeout(()=>{
                asteroid.style.display = 'none';
            },250)
            
        }
    }



}
var isleftactive = false;