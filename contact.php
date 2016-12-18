<?php

$errorMSG = "";
if (empty($_POST["inputName"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["inputName"];
}
if (empty($_POST["inputSubject"])) {
    $errorMSG = "sub is req ";
} else {
    $subject = $_POST["inputSubject"];
}
if (empty($_POST["inputEmail"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["inputEmail"];
}
if (!filter_var($_POST['inputEmail'], FILTER_VALIDATE_EMAIL)) {
    $errorMSG .= "Email is not good ";
}
else {
    $email = $_POST["inputEmail"];
}
if (empty($_POST["inputMessage"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["inputMessage"];
}
$EmailTo = "myzalik@gmail.com";
$Body ="";

$name = $_POST["inputName"];
$email = $_POST["inputEmail"];
$message = $_POST["inputName"];
$inputSubject= $_POST["inputSubject"];

$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$success = mail($EmailTo, $inputSubject, $Body, "From:".$email);

if ($success && $errorMSG == ""){
    $data = array('success' => true, 'message' => 'Dziękujemy, otrzymaliśmy państwa wiadomość.');
    echo json_encode($data);
}else{

    $data = array('success' => false, 'message' => $errorMSG);
    echo json_encode($data);

}
