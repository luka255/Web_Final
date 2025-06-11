document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("formStatus");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            formStatus.style.color = "red";
            formStatus.textContent = "Please fill out all fields.";
            return;
        }

        formStatus.style.color = "#2a9d8f";
        formStatus.textContent = "Sending your message...";

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        fetch("contact.php", {
            method: "POST",
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                formStatus.style.color = "#2a9d8f";
                formStatus.textContent = data;
                contactForm.reset();
            })
            .catch(error => {
                formStatus.style.color = "red";
                formStatus.textContent = "There was a problem sending your message. Please try again later.";
                console.error("Error:", error);
            });
    });
});

