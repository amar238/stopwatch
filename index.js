var stopwatchElement = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var timer;
var hours = 0, minutes = 0, seconds = 0 , miliseconds=0;

// start/resume stopwatch
function startStopwatch() {
    startBtn.style.backgroundColor = "white";
    stopBtn.style.backgroundColor = "red";
    stopBtn.style.color = "greenyellow"
    resetBtn.style.backgroundColor = "orange"
    resetBtn.style.color="blue"
    clearInterval(timer);
    timer = setInterval(updateStopwatch, 10);
}
// pause stopwatch
function stopStopwatch() {
    clearInterval(timer);
    startBtn.style.backgroundColor = "greenyellow";
    stopBtn.style.backgroundColor = "white";
    stopBtn.style.color = "black"
    resetBtn.style.backgroundColor = "orange"
    resetBtn.style.color="blue"
}
// reset stopwatch clear the values of time variables
function resetStopwatch() {
    clearInterval(timer);
    startBtn.style.backgroundColor = "greenyellow";
    stopBtn.style.backgroundColor = "white";
    stopBtn.style.color = "black"
    resetBtn.style.backgroundColor = "white"
    resetBtn.style.color="black"
    hours = minutes = seconds = miliseconds = 0;
    stopwatchElement.textContent = "hh:mm:ss:ms\n00:00:00:00";
}
// update display for every 10 miliseconds
function updateStopwatch() {
    miliseconds+=10;
    if(miliseconds>=1000){
        miliseconds= 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    stopwatchElement.textContent = "hh:mm:ss:ms\n" + arrange(hours) + ":" + arrange(minutes) + ":" + arrange(seconds) + ":" + arrangeMS(miliseconds);
}
// functions to add 0s so that structure on display remains intact
function arrange(num) {
  return (num < 10 ? "0" : "") + num;
}
function arrangeMS(num) {
    return (num < 100? "0" : "") +num/10;
}