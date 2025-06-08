$(document).ready(function () {
    let selectedDestination = "";

    $(".book-btn").on("click", function () {
        selectedDestination = $(this).data("destination");
        $("#destinationName").text(selectedDestination);
        $("#bookingModal").fadeIn();
        $("#confirmationMessage").hide();
        $("#bookingForm")[0].reset();
    });

    $(".close-btn").on("click", function () {
        $("#bookingModal").fadeOut();
    });

    $("#bookingForm").on("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        const fullName = $("#fullName").val();
        const email = $("#email").val();
        const date = $("#travelDate").val();

        // Simulate successful booking
        $("#confirmationMessage")
            .html(`Thank you, ${fullName}! Your trip to ${selectedDestination} on ${date} is booked.`)
            .show();

        // Optionally hide modal after a delay
        setTimeout(() => {
            $("#bookingModal").fadeOut();
        }, 3000);
    });

    // Optional: Close modal when clicking outside
    $(window).on("click", function (e) {
        if ($(e.target).is("#bookingModal")) {
            $("#bookingModal").fadeOut();
        }
    });
});
