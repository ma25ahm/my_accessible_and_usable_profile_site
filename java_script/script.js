
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("form-message");

        message.textContent = "Thank you, " + name + ". Your form has been checked, but no message was sent.";

        contactForm.reset();
    });
}
