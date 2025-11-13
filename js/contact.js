var phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener('keydown', function (e) {


})
phoneInput.addEventListener('input', function () {
    console.log("test");
    this.value = formatToPhone(this.value);
})
function formatToPhone(val) {
    var digits = val.replace(/[^\d]/g, '');
    const areaCode = digits.substring(0, 3);
    const prefix = digits.substring(3, 6);
    const suffix = digits.substring(6, 10);
    if (digits.length > 6) {
        digits = `(${areaCode}) ${prefix} - ${suffix}`;
    } else if (digits.length > 3) {
        digits = `(${areaCode}) ${prefix}`;

    } else if (digits.length > 0) {
        digits = `(${areaCode}`;
    }
    return digits;

}
const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("formStatus");

console.log("Form script loaded, form:", form);

form.addEventListener("submit", function (e) {
    submitButton.disabled = true;
    e.preventDefault();

    // Check Bootstrap validation
    if (!form.checkValidity()) {
        form.classList.add('was-validated'); // show invalid feedback
        e.stopPropagation();
        submitButton.disabled = false;
        return; // stop if invalid
    }

    form.classList.add('was-validated'); // optional: mark valid fields

    const data = new FormData(form);


    // Honeypot
    if (document.getElementById("country").value != "") {
        return
    }

    // AJAX submit
    fetch("https://formspree.io/f/xzzyzopg", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    })
        .then(response => {
            if (response.ok) {
                statusDiv.innerHTML = '<div class="alert alert-success" role="alert">Message sent! Thank you.</div>';
                form.reset();
                form.classList.remove('was-validated');
                submitButton.disabled = false;
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, "errors")) {
                        statusDiv.innerHTML = '<div class="alert alert-danger" role="alert">' +
                            data["errors"].map(error => error["message"]).join(", ") +
                            ' You can always email us directly at <a href="mailto:huskerracing@gmail.com" class="footer-icon" alt="Mail" aria-label="Mail">huskerracing@gmail.com</a></div>';
                    } else {
                        statusDiv.innerHTML = '<div class="alert alert-danger" role="alert">Oops! There was a problem submitting your form. You can always email us directly at <a href="mailto:huskerracing@gmail.com" class="footer-icon" alt="Mail" aria-label="Mail">huskerracing@gmail.com</a></div>';
                    }
                    submitButton.disabled = false;
                });
            }
        })
        .catch(error => {
            console.log("Fetch error:", error);
            statusDiv.innerHTML = '<div class="alert alert-danger" role="alert">Oops! There was a problem submitting your form. You can always email us directly at <a href="mailto:huskerracing@gmail.com" class="footer-icon" alt="Mail" aria-label="Mail">huskerracing@gmail.com</a></div>';
            submitButton.disabled = false;
        });

});
