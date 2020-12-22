"use strict"
//remember these functions when creating a employee time tracker

function currentTime() {
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
hour = updateTime(hour);
min = updateTime(min);
sec = updateTime(sec);
document.getElementById("clock").innertext = hour + " : " +
    min + " : " + sec;
var t = setTimeout(function (){currentTime()
    }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();