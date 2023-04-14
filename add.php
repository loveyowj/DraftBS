<?php
include_once("connections/connection.php");
$conn = connection();

if(isset($_POST['submit'])){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO `user_list`(`firstName`, `lastName`, `userName`, `email`, `password`) 
    VALUES ('$firstName','$lastName','$userName','$email','$password')";
    
    $conn->query($sql) or die ($conn->error);

    echo header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel = "stylesheet" href = "css/register_style.css">
</head>
<body>
<section>
    <img src = "img/bg2.jpg" class = "bg">
    <div class = "register">
        <h2>REGISTER</h2>
        <form action = "" method = "post">
            <p> Create an Account</p><br>
            <div class = "inputBox">
            <input type = "text" name = "firstName" id = "firstName" placeholder = "First Name" required maxlength = "50">
            </div>
            <div class = "inputBox">
            <input type="text" name = "lastName" id = "lastName" placeholder = "Last Name" required maxlength = "50">
            </div>
            <div class = "inputBox">
            <input type = "text" name = "userName" id = "userName" placeholder = "Username" required maxlength = "50">
            </div>
            <div class = "inputBox">
            <input type = "text" name = "email" id = "email" placeholder = "Email" required maxlength = "100">
            </div>
            <div class = "inputBox">
            <input type = "password" name = "password" id = "password" placeholder = "Password" required maxlength = "20">
            </div>
            <div class = "inputBox">
            <input type = "submit" name = "submit" value = "Submit" id = "btn" onclick = "openPopup()">
            </div>
            <div class = "group">
            <p> Already have an account? <a href = "login.php"> Sign In </a></p>
            </div>
        </form>
    </div>
</section>
</body>
</html>