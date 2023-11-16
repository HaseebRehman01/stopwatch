//get work
var hours = document.querySelector("#hr")
var hourspan = document.querySelector("#hrspan")
var minutes = document.querySelector("#min")
var minutespan = document.querySelector("#mspan")
var seconds = document.querySelector("#sec")
var secondspan = document.querySelector("#s-span")
var counter = document.querySelector("#count");
var start = document.querySelector("#startStop");
var resets = document.querySelector("#reset");

// timer work display none

// Initial values code 
var hour = 0
var minute = 0
var second = 0
var count = 0 
var timer = false;

// Start/stop button code
function startstop() {
    if (timer) {
        // If the timer is running, stop it
        timer = false;
        start.innerText = "Start";
    } else {
        // If the timer is not running, start it
        timer = true;
        start.innerText = "Stop";
        watch(); // Start the timer
    }
}

// Main stopwatch conditions code
function watch() {
    if (timer) {
        count++;

        if (count >= 100) {
            second++
            count = 0
            
            if (second >= 60) {
                minutes.hidden = false
                minutespan.hidden = false
                minute++
                second = 0
            }

            if (minute >= 60) {
                hours.hidden = false
                hourspan.hidden = false
                hour++
                minute = 0 
                second = 0
            }

            var hrString = hour < 10 ? "0" + hour : hour;
            var minString = minute < 10 ? "0" + minute : minute;
            var secString = second < 10 ? "0" + second : second;

            hours.innerHTML = hrString
            minutes.innerHTML = minString
            seconds.innerHTML = secString
        }

        var countString = count < 10 ? "0" + count : count;
        counter.innerHTML = countString

        setTimeout(watch, 10);  
    }
}

// Reset button work
function reset() {
    timer = false; // Set timer to false
    start.innerText = "Start"; // Change the text of the button to "Start"
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    // Update the displayed values
    hours.innerHTML = "0";
    minutes.innerHTML = "0";
    seconds.innerHTML = "0";
    secondspan.innerHTML = "s";
    counter.innerHTML = "00";
    
    // Hide the hour and minute span
}

// Full screen work 
function openFullscreen() {
    var elem = document.getElementById("section1"); // Select the element you want to make full-screen

    if (!document.fullscreenElement) {
        // If not in fullscreen, request fullscreen
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        // If in fullscreen, exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}



// complete