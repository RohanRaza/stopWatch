var msec = 0;
var sec = 0;
var min = 0;
var msecHeading = document.getElementById("msec")
var secHeading = document.getElementById("sec")
var minHeading = document.getElementById("min")
var interval;


function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }else if (sec >= 10){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}



function start(){
    interval = setInterval(timer,10)
    var x = document.getElementById("start").disabled = true;
}

function pause(){
    clearInterval(interval);
}

function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
}



