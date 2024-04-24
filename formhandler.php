<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = "igarasecondaryschool.com";
$email_subject = 'New Form Submission';
$email_body = "Visitor/Parent Name: $name.\n" .
    "Visitor/Parent Phone Number : $Visitor_email.\n" .
    "Visitor/Parent Message : $message.\n";

$to = "ianasasira7@gmail.com";
$headers = "From : email_from \r\n";
$headers .= "Reply-To: $visitors_email \r\n";
$mailsent = mail($to, $email_subject, $email_body, $headers);
if ($mailsent) {

    echo "sent";
} else {
    header("Location: index.html");
}
