<?php

include_once("connections/connection.php");
$conn = connection();
session_start();

if(isset($_POST['login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user_list WHERE userName = '$username' AND password = '$password'";
    $user = $conn->query($sql) or die ($conn->error);
    $row = $user->fetch_assoc();
    $total = $user->num_rows;

    if($total === 1){
        $_SESSION['UserLogin'] = $row['userName'];
        $_SESSION['Access'] = $row['access'];
        echo header("Location: home.php");
    }else{
        echo "No User Found";
    }

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel = "stylesheet" href = "css/login_style.css">
</head>
<body>
<section>
    <img src = "img/bg2.jpg" class = "bg">
    <div class = "login">
        <h2>Log In</h2>
        <form action = "" method = "post">
            <div class = "inputBox">
                <input type = "text" name = "username" id = "username" placeholder = "Username" required maxlength = "100">
            </div>
            <div class = "inputBox">
                <input type = "password" name = "password" id = "password" placeholder = "password" required maxlength = "20">
            </div>
            <div class = "inputBox">
                <input type = "submit" name = "login" id = "btn" placeholder = "Submit" >
            </div>
            <div class = "group">
                <a href = "#">Forget Password</a>
                <a href = "add.php"> Register </a>
            </div>
        </form>
    </div>
</section>
</body>
</html>