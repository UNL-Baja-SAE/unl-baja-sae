var headings = ["Body & Ergonomics","Electronics","Suspension","Powertrain","Controls","Chassis"];
var descriptons = [
    "Responsible for complete design of body.",
    "Responsible for brakes lights and driver console.",
    "Responsible for complete design and analysis of suspension.",
    "Responsible for complete design and analysis of clutches, gearbox, and driveshafts.",
    "Responsible for complete design of driver controls (Steering, Brakes, Throttle).",
    "Responsible for complete design and analysis of chassis."];
var images = ["images/IMG_2154.JPG","images/IMG_2583.JPG","images/IMG_2016.JPG","images/IMG_2267.JPG","images/IMG_2066.JPG","images/IMG_1994.JPG"];

  document.querySelectorAll('input[name="car-part"]').forEach(radio => {
    radio.addEventListener("change", () => {
     document.getElementById("desc-title").innerText = headings[radio.value];
     document.getElementById("desc-img").src = images[radio.value];
     document.getElementById("desc-text").innerText = descriptons[radio.value];
    });
  });
