<?php

if($_POST["submit"]) {
    $recipient="your@email.address";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?><!DOCTYPE html>
<html lang ="en-us">
<head>
  <meta charset="UTF-8">
  <title>Contact</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>


<div class = "content">

<nav>
<a href = "index.html">About Me</a>
<a href = "portfolio.html">Portfolio</a>
<a href = "contact.html">Contact</a>
</nav>

 <form method="post" action="contact.php">
        <label>Name:</label>
        <input name="sender">

        <label>Email address:</label>
        <input name="senderEmail">

        <label>Message:</label>
        <textarea rows="5" cols="20" name="message"></textarea>

        <input type="submit" name="submit">
    </form>

</div>

</body>
</html>