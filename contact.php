<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo "Please fill out all fields.";
        exit;
    }

    $entry = "Name: $name\nEmail: $email\nMessage: $message\n---\n";
    file_put_contents("contact_messages.txt", $entry, FILE_APPEND | LOCK_EX);

    echo "Thank you for contacting us! We'll get back to you soon.";
} else {
    http_response_code(405);
    echo "Invalid request method.";
}
