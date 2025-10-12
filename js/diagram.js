var headings = ["Body & Ergonomics","Electronics","Suspension","Powertrain","Controls","Chassis"];
var descriptons = [
    "We design the car’s body for comfort, safety, and a professional look. Using carbon fiber, we build strong, lightweight components that protect the driver and internal systems.",
    "Our team wires the car for essential systems like kill switches and brake lights. We also innovate with custom displays and electronic upgrades to enhance performance.",
    "We design and tune the suspension to handle rough terrain with control and stability. Every part is modeled and tested to balance strength, weight, and performance.",
    "We convert engine power into motion with a custom gearbox, CVT, and 4x4 drivetrain. Each part is optimized for strength, torque, and efficiency.",
    "The controls system ensures safe steering and braking through precision-engineered components. We focus on durability and reliability to perform under tough race conditions.",
    "Our chassis team builds the frame that holds everything together. It’s engineered to be lightweight, strong, and fully compliant with SAE safety standards."];
var images = ["images/IMG_2154.JPG","images/IMG_2583.JPG","images/PXL_20251010_000837776.MP (1).jpg","images/PXL_20251009_235149453.MP (1).jpg","images/IMG_2066.JPG","images/IMG_1994.JPG"];

  document.querySelectorAll('input[name="car-part"]').forEach(radio => {
    radio.addEventListener("change", () => {
     document.getElementById("desc-title").innerText = headings[radio.value];
     document.getElementById("desc-img").src = images[radio.value];
     document.getElementById("desc-text").innerText = descriptons[radio.value];
    });
  });
