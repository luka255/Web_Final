<?php
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["fullName"]);
    $email = trim($_POST["email"]);
    $destination = trim($_POST["destination"]);
    $date = trim($_POST["travelDate"]);

    $name = ucwords(strtolower($name));
    $email = strtolower($email);
    $destination = ucfirst(strtolower($destination));

    $bookingData = [
        "Name" => $name,
        "Email" => $email,
        "Destination" => $destination,
        "TravelDate" => $date,
        "Timestamp" => date("Y-m-d H:i:s")
    ];

    $file = fopen("bookings.txt", "a");
    if ($file) {
        fwrite($file, json_encode($bookingData) . PHP_EOL);
        fclose($file);
        echo "Your trip to $destination on $date has been booked successfully!";
    } else {
        http_response_code(500);
        echo "Error saving booking information.";
    }
} else {
    http_response_code(405);
    echo "Invalid request.";
}


