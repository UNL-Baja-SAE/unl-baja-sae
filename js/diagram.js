const subs = {
  chassis: { num: 'Subsystem 01', title: 'Chassis', desc: 'The Chassis team builds the overall frame of the car. It\'s engineered to be lightweight, strong, and fully compliant with SAE safety standards.', img: 'images/IMG_1994.jpg', link:"#collapseChassis" },
  suspension: { num: 'Subsystem 02', title: 'Suspension', desc: 'The Suspension team designs and tunes the suspension to handle rough terrain with control and stability. Every part is modeled and tested to balance strength, weight, and performance.', img: 'images/PXL_20251010_000837776.MP (1).jpg',link:"#collapseSuspension" },
  powertrain: { num: 'Subsystem 03', title: 'Powertrain', desc: 'Engine integration, CVT belt drive tuning, gear reduction, and drivetrain packaging for maximum off-road traction.', img: 'images/PXL_20251009_235149453.MP (1).jpg',link:"#collapsePowertrain" },
  controls: { num: 'Subsystem 04', title: 'Controls', desc: 'The Controls team ensures safe steering and braking through precision-engineered components. They focus on durability and reliability to perform under tough race conditions.', img: 'images/IMG_2066.jpg',link:"#collapseControls" },
  body: { num: 'Subsystem 05', title: 'Body & Ergonomics', desc: 'The Body & Ergonomics team designs the car\'s body for comfort, safety, and a professional look. Using carbon fiber, they build strong, lightweight components that protect the driver and internal systems.', img: 'images/IMG_2154.jpg',link:"#collapseBodyErgo" },
  electronics: { num: 'Subsystem 06', title: 'Electronics', desc: 'The Electronics team wires the car for essential systems like kill switches and brake lights. They also innovate with custom displays and electronic upgrades to enhance performance.', img: 'images/electronics.jpg',link:"#collapseElectronics" },
};
function selectSub(id) {
  const s = subs[id];
  document.getElementById('panel-num').textContent = s.num;
  document.getElementById('panel-title').textContent = s.title;
  document.getElementById('panel-desc').textContent = s.desc;
  document.getElementById('panel-img').src = s.img;
  document.querySelectorAll('.sub-marker').forEach(m => m.classList.toggle('active', m.getAttribute('onclick').includes(id)));
  document.querySelectorAll('.sub-tab').forEach(b => b.classList.toggle('active', b.getAttribute('onclick').includes(id)));
  document.getElementById('sub-link').href = '../subsystems'+s.link;
}