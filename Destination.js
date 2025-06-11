document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("bookingModal");
    const destinationName = document.getElementById("destinationName");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const bookingForm = document.getElementById("bookingForm");

    const bookButtons = document.querySelectorAll(".book-btn");
    bookButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedDestination = button.getAttribute("data-destination");
            destinationName.textContent = selectedDestination;
            bookingForm.reset();
            confirmationMessage.style.display = "none";
            confirmationMessage.textContent = "";
            modal.style.display = "block";
        });
    });

    const closeButtons = document.querySelectorAll(".close-btn");
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(bookingForm);
        formData.append("destination", destinationName.textContent);

        fetch("book_destinations.php", {
            method: "POST",
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                confirmationMessage.textContent = "Booking successful! Thank you for choosing Explore Georgia.";
                confirmationMessage.style.color = "green";
                confirmationMessage.style.display = "block";
                bookingForm.reset();
            })
            .catch(error => {
                confirmationMessage.textContent = "An error occurred while booking. Please try again.";
                confirmationMessage.style.color = "red";
                confirmationMessage.style.display = "block";
            });
    });
});
