// Set the date we're counting down to
var countDownDate = new Date("May 7, 2026 12:00:00").getTime();

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


    if (document.getElementById("days-count").innerHTML != days) {
        document.getElementById("days-count").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("days-count").classList.remove('beat-animation');
        }, 500);
    }
    if (document.getElementById("hours-count").innerHTML != hours) {
        document.getElementById("hours-count").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("hours-count").classList.remove('beat-animation');
        }, 500);
    }
    if (document.getElementById("minutes-count").innerHTML != minutes) {
        document.getElementById("minutes-count").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("minutes-count").classList.remove('beat-animation');
        }, 500);
    }
    if (document.getElementById("seconds-count").innerHTML != seconds) {
        document.getElementById("seconds-count").classList.add('beat-animation');
        setTimeout(() => {
            document.getElementById("seconds-count").classList.remove('beat-animation');
        }, 500);
    }
    // Display the result in the element with id="demo"
    if (distance <= 0) {
        document.getElementById("days-count").innerHTML = '00';
        document.getElementById("hours-count").innerHTML = '00';
        document.getElementById("minutes-count").innerHTML = '00';
        document.getElementById("seconds-count").innerHTML = '00';
    }
    document.getElementById("days-count").innerHTML = days;
    document.getElementById("hours-count").innerHTML = hours;
    document.getElementById("minutes-count").innerHTML = minutes;
    document.getElementById("seconds-count").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}