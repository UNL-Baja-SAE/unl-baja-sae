// Set the date we're counting down to
var countDownDate = new Date("August 24, 2026 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(updateCountdown, 1000);

function updateCountdown(){
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");;
    var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");


    if (document.getElementById("cd-days").innerHTML != days) {
        document.getElementById("cd-days").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("cd-days").classList.remove('beat-animation');
        }, 500);
    }
    if (document.getElementById("cd-hours").innerHTML != hours) {
        document.getElementById("cd-hours").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("cd-hours").classList.remove('beat-animation');
        }, 500);
    }
    if (document.getElementById("cd-mins").innerHTML != minutes) {
        document.getElementById("cd-mins").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("cd-mins").classList.remove('beat-animation');
        }, 500);
    }
    if (document.getElementById("cd-secs").innerHTML != seconds) {
        document.getElementById("cd-secs").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("cd-secs").classList.remove('beat-animation');
        }, 500);
    }
    // Display the result in the element with id="demo"
    if (distance <= 0) {
        document.getElementById("cd-days").innerHTML = '00';
        document.getElementById("cd-hours").innerHTML = '00';
        document.getElementById("cd-mins").innerHTML = '00';
        document.getElementById("cd-secs").innerHTML = '00';
    }

    document.getElementById("cd-days").innerHTML = days;
    document.getElementById("cd-hours").innerHTML = hours;
    document.getElementById("cd-mins").innerHTML = minutes;
    document.getElementById("cd-secs").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);

    }
}