var headings = ["Body & Ergonomics", "Electronics", "Suspension", "Powertrain", "Controls", "Chassis"];
var descriptons = [
  "The Body & Ergonomics team designs the car’s body for comfort, safety, and a professional look. Using carbon fiber, they build strong, lightweight components that protect the driver and internal systems.",
  "The Electronics team wires the car for essential systems like kill switches and brake lights. They also innovate with custom displays and electronic upgrades to enhance performance.",
  "The Suspension team designs and tunes the suspension to handle rough terrain with control and stability. Every part is modeled and tested to balance strength, weight, and performance.",
  "The Powertrain team converts engine power into motion with a custom gearbox, CVT, and 4x4 drivetrain. Each part is optimized for strength, torque, and efficiency.",
  "The Controls team ensures safe steering and braking through precision-engineered components. They focus on durability and reliability to perform under tough race conditions.",
  "The Chassis team builds the overall frame of the car. It’s engineered to be lightweight, strong, and fully compliant with SAE safety standards."];
var images = ["images/IMG_2154.jpg", "images/electronics.jpg", "images/PXL_20251010_000837776.MP (1).jpg", "images/PXL_20251009_235149453.MP (1).jpg", "images/IMG_2066.jpg", "images/IMG_1994.jpg"];
var links = ["#collapseBodyErgo", "#collapseElectronics", "#collapseSuspension", "#collapsePowertrain", "#collapseControls", "#collapseChassis"]
var currentRadio = -1;

document.querySelectorAll('input[name="car-part"]').forEach(radio => {
  radio.addEventListener("change", () => {
    currentRadio = radio.value;
    document.getElementById("desc-title").innerText = headings[radio.value];
    document.getElementById("desc-img").src = images[radio.value];
    document.getElementById("desc-text").innerText = descriptons[radio.value];
    document.getElementById("desc-link").href = "subsystems/" + links[radio.value];


  });
});

function goToAbout() {
  if (currentRadio > 0) {
    const bsCollapse = new bootstrap.Collapse(links[currentRadio], {
      toggle: true
    })
  }
  console.log(links[currentRadio]);
}

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.hash;
  if (links.indexOf(page) != -1) {
    const bsCollapse = new bootstrap.Collapse(page, {
      toggle: true
    })
  }

});
