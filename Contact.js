$(document).ready(function() {
    $("#contactForm").on("submit", function(e) {
        e.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (!name || !email || !message) {
            $("#formStatus").css("color", "red").text("Please fill out all fields.");
            return;
        }

        $("#formStatus").css("color", "#2a9d8f").text("Sending your message...");

        setTimeout(() => {
            $("#formStatus").css("color", "#2a9d8f").text("Thank you for contacting us! We'll get back to you soon.");
            $("#contactForm")[0].reset();
        }, 1500);
    });
});
