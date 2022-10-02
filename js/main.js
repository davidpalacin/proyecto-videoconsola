$(document).ready(function (){
    let powerStatus = false;
    let audio = $("audio")[0];

    $(".powerButton").click(function () {
        powerStatus === false ? powerStatus=true : powerStatus=false
        
        if(powerStatus === true){
            $(".powerLed").css("background-color", "red");
            $(".usableScreen").css("background-image", "url(https://upload.wikimedia.org/wikipedia/en/5/58/Pokemon_Yellow_Rival_Battle.png)");
            $(".usableScreen").css("background-repeat", "no-repeat");
            $(".usableScreen").css("background-size", "cover");
            audio.load();
            audio.play();
        } else{
            $(".powerLed").css("background-color", "grey")
            audio.pause();
            $(".usableScreen").css("background-color", "grey");
            $(".usableScreen").css("background-image", "none");
        }

        
        
    });
});