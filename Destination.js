$(document).ready(function () {
    const modal = $("#bookingModal");
    const destinationName = $("#destinationName");
    const confirmationMessage = $("#confirmationMessage");

    $(".book-btn").on("click", function () {
        const selectedDestination = $(this).data("destination");
        destinationName.text(selectedDestination);
        $("#bookingForm")[0].reset();
        confirmationMessage.hide().text("");
        modal.show();
    });

    $(".close-btn").on("click", function () {
        modal.hide();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    $("#bookingForm").on("submit", function (e) {
        e.preventDefault();

        const formData = {
            destination: destinationName.text(),
            fullName: $("#fullName").val(),
            email: $("#email").val(),
            travelDate: $("#travelDate").val()
        };

        $.ajax({
            type: "POST",
            url: "book_destinations.php",
            data: formData,
            success: function (response) {
                confirmationMessage
                    .text("Booking successful! Thank you for choosing Explore Georgia.")
                    .css("color", "green")
                    .show();
                $("#bookingForm")[0].reset();
            },
            error: function () {
                confirmationMessage
                    .text("An error occurred while booking. Please try again.")
                    .css("color", "red")
                    .show();
            }
        });
    });
});
